import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "../../modules/config/theme";
import { storage } from "../../modules/storage";
import { getHash } from "../../modules/utils";
const Heading = styled.h1`
    font-family: ${theme.fonts.body};
`;
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
            if (this.panel[i] && this.panel[i].style.height) {
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
        if (this.panel[sectionIndex].classList.contains("active")) {
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
        this.title[sectionIndex].setAttribute("aria-expanded", false);
        this.panel[sectionIndex].classList.remove("active");
        storage.accordion.removeAccordionId();
    };

    makeActive = sectionIndex => {
        this.title[sectionIndex].classList.add("active");
        this.title[sectionIndex].setAttribute("aria-expanded", true);
        this.panel[sectionIndex].classList.add("active");
        storage.accordion.setAccordionId(this.section[sectionIndex].id);
    };

    isVisible = ele => {
        if (!ele) {
            return false;
        }
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
                this.makeInactive(i);
            }
            return section;
        });
    };
    renderWrappedChildren = (children, sectionIndex) => {
        const { keepOpen } = this.props;
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
                const title = React.cloneElement(child, {
                    ref: title => (this.title[sectionIndex] = title),
                    onClick: () => {
                        this.toggleActive(sectionIndex);
                        if (!keepOpen) {
                            this.closeOthers(sectionIndex);
                        }
                    },
                    "aria-expanded": false
                });
                if (child.props.heading) {
                    return <Heading as={child.props.heading}>{title}</Heading>;
                }
                return title;
            }

            if (child.type.displayName === "Panel") {
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

Accordion.Title = styled.button`
    position: relative;
    background-color: ${theme.colors.offWhite};
    color: ${theme.colors.base};
    cursor: pointer;
    font-weight: bold;
    padding: 1rem 2rem;
    border: none;
    text-align: left;
    outline: none;
    width: 100%;

    &:hover {
        background-color: #ccc;
    }
    &:focus{
        outline: auto 5 px -webkit-focus-ring-color;
        outline: auto 2px Highlight;
        box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
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

    @media print {
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
    height: 0;
    display: none;
    overflow: hidden;

    &.active {
        display: block;
        height: auto;
    }

    @media print {
        display: block;
        height: auto;
    }
`;

Accordion.Panel.displayName = "Panel";

Accordion.Section = styled.div`
    margin-top: 1rem;
`;

Accordion.Section.displayName = "Section";

Accordion.Section.propTypes = {
    id: PropTypes.string
};

Accordion.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node.isRequired,
    keepOpen: PropTypes.bool
};

export default Accordion;
