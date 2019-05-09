import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "../../modules/config/theme";
import { storage } from "../../modules/storage";
import { getHash } from "../../modules/utils";

class Accordion extends Component {
    state = { active: false };

    constructor(props) {
        super(props);
        this.section = [];
        this.title = [];
        this.panel = [];
    }

    componentDidMount() {
        const id = getHash();
        if (id) {
            const element = document.getElementById(id);
            this.section.some((section, i) => {
                if (section.id === id) {
                    this.toggleActive(i);
                    return true;
                } else if (section.contains(element)) {
                    this.makeActive(i);
                    return true;
                }

                return false;
            });
        } else {
            const accId = storage.accordion.retrieveAccordionId();
            if (accId) {
                this.section.some((section, i) => {
                    if (section.id === accId) {
                        this.makeActive(i);
                        return true;
                    }

                    return false;
                });
            }
        }
    }

    componentDidUpdate() {
        // if text updates - update the current opened accordion height.
        this.section.some((section, i) => {
            if (this.panel[i] && this.panel[i].style.maxHeight) {
                this.makeActive(i);
                return true;
            }
            return false;
        });
    }

    componentWillReceiveProps(props) {
        if (props.reset !== this.props.reset && props.reset) {
            this.closeAll();
        }
    }

    toggleActive = sectionIndex => {
        if (this.panel[sectionIndex].style.maxHeight) {
            this.makeInactive(sectionIndex);
        } else {
            this.makeActive(sectionIndex);
            setTimeout(() => {
                if (!this.isVisible(this.title[sectionIndex])) {
                    this.scrollToTitle(sectionIndex);
                }
            }, 215);
        }
    };

    makeInactive = sectionIndex => {
        this.title[sectionIndex].classList.remove("active");
        this.panel[sectionIndex].style.maxHeight = null;
        this.panel[sectionIndex].style.display = "none";
        storage.accordion.removeAccordionId();
    };

    makeActive = sectionIndex => {
        this.title[sectionIndex].classList.add("active");
        this.panel[sectionIndex].style.display = "block";
        this.panel[sectionIndex].style.maxHeight =
            this.panel[sectionIndex].scrollHeight + "px";
        storage.accordion.setAccordionId(this.section[sectionIndex].id);
    };

    isVisible = ele => {
        var rect = ele.getBoundingClientRect();
        var viewHeight = Math.max(
            document.documentElement.clientHeight,
            window.innerHeight
        );
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    };

    scrollToTitle = sectionIndex => {
        this.title[sectionIndex].scrollIntoView(true);
    };
    closeAll = () => {
        this.section.map((section, i) => {
            this.makeInactive(i);
            return section;
        });
    };

    closeOthers = sectionIndex => {
        this.section.map((section, i) => {
            if (section && sectionIndex !== i) {
                this.panel[i].style.maxHeight = null;
                this.title[i].classList.remove("active");
            }
            return section;
        });
    };
    renderWrappedChildren = (children, sectionIndex) => {
        const { keepOpen, pdf } = this.props;
        this.section = [];
        this.title = [];
        this.panel = [];
        return React.Children.map(children, (child, i) => {
            if (child.type.displayName === "Section") {
                return React.cloneElement(child, {
                    ref: section => (this.section[i] = section),
                    children: this.renderWrappedChildren(
                        child.props.children,
                        i
                    )
                });
            }

            if (child.type.displayName === "Title") {
                if (pdf) {
                    return React.createElement(PdfTitle, child.props);
                }
                return React.cloneElement(child, {
                    ref: title => (this.title[sectionIndex] = title),
                    onClick: () => {
                        this.toggleActive(sectionIndex);
                        if (!keepOpen) {
                            this.closeOthers(sectionIndex);
                        }
                    }
                });
            }

            if (child.type.displayName === "Panel") {
                if (pdf) {
                    return React.createElement(PdfPanel, child.props);
                }
                return React.cloneElement(child, {
                    ref: panel => (this.panel[sectionIndex] = panel)
                });
            }

            return child;
        });
    };

    render() {
        const { children, id } = this.props;
        return (
            <Wrapper id={id}>{this.renderWrappedChildren(children)}</Wrapper>
        );
    }
}

const Wrapper = styled.div``;

Accordion.Title = styled.div`
    position: relative;
    background-color: ${theme.colors.offWhite};
    color: ${theme.colors.base};
    cursor: pointer;
    font-weight: bold;
    padding: 1rem 2rem;
    border: none;
    text-align: left;
    outline: none;

    &:hover {
        background-color: #ccc;
    }

    &:after {
        position: absolute;
        content: "+";
        color: ${theme.colors.base};
        font-size: 2em;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
    &.active {
        &:after {
            content: "-";
        }
    }
`;

Accordion.Title.displayName = "Title";

Accordion.Panel = styled.div`
    padding: 0 18px;
    background-color: white;
    border-bottom: 3px solid ${theme.colors.offWhite};
    border-left: 3px solid ${theme.colors.offWhite};
    border-right: 3px solid ${theme.colors.offWhite};
    max-height: 0;
    display: none;
    overflow: hidden;
`;

Accordion.Panel.displayName = "Panel";

Accordion.Section = styled.div`
    margin-top: 1rem;
`;

Accordion.Section.displayName = "Section";

const PdfTitle = styled(Accordion.Title)`
    &:after {
        content: "-";
    }
`;
const PdfPanel = styled(Accordion.Panel)`
    max-height: 10000px;
`;

Accordion.Section.propTypes = {
    id: PropTypes.string
};

Accordion.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node.isRequired,
    keepOpen: PropTypes.bool,
    pdf: PropTypes.bool
};

export default Accordion;
