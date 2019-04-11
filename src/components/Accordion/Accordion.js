import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import { getHash } from "../../modules/utils";
import { theme } from "../../modules/config/theme";

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
            this.section.some((section, i) => {
                if (section.id === id) {
                    this.toggleActive(i);
                    return true;
                }

                return false;
            });
        }
    }

    componentDidUpdate() {
        // if text updates - update the current opened accordion height.
        this.section.map((section, i) => {
            if (this.panel[i].style.maxHeight) {
                this.panel[i].style.maxHeight =
                    this.panel[i].scrollHeight + "px";
            }
            return section;
        });
    }

    componentWillReceiveProps(props) {
        if (props.reset !== this.props.reset && props.reset) {
            this.closeAll();
        }
    }

    toggleActive = sectionIndex => {
        this.title[sectionIndex].classList.toggle("active");
        if (this.panel[sectionIndex].style.maxHeight) {
            this.panel[sectionIndex].style.maxHeight = null;
        } else {
            this.panel[sectionIndex].style.maxHeight =
                this.panel[sectionIndex].scrollHeight + "px";
            setTimeout(() => {
                if (!this.isVisible(this.title[sectionIndex])) {
                    this.scrollToTitle(sectionIndex);
                }
            }, 215);
        }
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
            this.panel[i].style.maxHeight = null;
            this.title[i].classList.remove("active");

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
    background-color: ${theme.colors.offWhite};
    color: ${theme.colors.base};
    cursor: pointer;
    font-weight: bold;
    padding: 1rem 2rem;
    border: none;
    text-align: left;
    outline: none;
    transition: 0.4s;

    &:hover {
        background-color: #ccc;
    }

    &:after {
        content: "+";
        color: ${theme.colors.base};
        float: right;
        margin-left: 5px;
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
    max-height: 100%;
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
