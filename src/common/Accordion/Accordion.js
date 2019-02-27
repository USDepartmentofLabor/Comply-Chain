import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

class Accordion extends Component {
    state = { active: false };

    constructor(props) {
        super(props);
        this.section = [];
        this.title = [];
        this.panel = [];
    }
    componentDidMount() {
        const { hash } = window.location;
        const id = hash.replace("#", "");
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
    toggleActive = sectionIndex => {
        this.title[sectionIndex].classList.toggle("active");
        if (this.panel[sectionIndex].style.maxHeight) {
            this.panel[sectionIndex].style.maxHeight = null;
        } else {
            this.panel[sectionIndex].style.maxHeight =
                this.panel[sectionIndex].scrollHeight + "px";
        }
    };
    renderWrappedChildren = (children, sectionIndex) => {
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
                return React.cloneElement(child, {
                    ref: title => (this.title[sectionIndex] = title),
                    onClick: () => {
                        this.toggleActive(sectionIndex);
                    }
                });
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

Accordion.Title = styled.div`
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;

    &:hover {
        background-color: #ccc;
    }

    &:after {
        content: "\\002B";
        color: #777;
        font-weight: bold;
        float: right;
        margin-left: 5px;
    }
    &.active {
        background-color: #ccc;

        &:after {
            content: "\\2212";
        }
    }
`;

Accordion.Title.displayName = "Title";

Accordion.Panel = styled.div`
    padding: 0 18px;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
`;

Accordion.Panel.displayName = "Panel";

Accordion.Section = styled.div``;

Accordion.Section.displayName = "Section";

Accordion.Section.propTypes = {
    id: PropTypes.string
};

Accordion.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Accordion;
