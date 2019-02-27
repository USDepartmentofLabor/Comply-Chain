import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

class Accordion extends Component {
    state = { active: false };
    toggleActive = e => {
        const title = e.target;
        const panel = e.target.nextElementSibling;

        if (!panel) {
            return;
        }
        title.classList.toggle("active");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    };
    renderWrappedChildren = children => {
        return React.Children.map(children, child => {
            // This is support for non-node elements (eg. pure text), they have no props
            if (!child.props) {
                return child;
            }

            if (child.type.displayName === "Section") {
                return React.cloneElement(child, {
                    children: this.renderWrappedChildren(child.props.children)
                });
            }

            if (child.type.displayName === "Title") {
                return React.cloneElement(child, {
                    onClick: this.toggleActive
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
    & {
        background-color: #eee;
        color: #444;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        transition: 0.4s;
    }

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

Accordion.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Accordion;
