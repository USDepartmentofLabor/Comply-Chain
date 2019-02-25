import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

class Accordion extends Component {
    state = { active: false };
    toggleActive = e => {
        const title = e.target;
        const panel = e.target.nextElementSibling;

        title.classList.toggle("active");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    };
    render() {
        const { children } = this.props;
        return (
            <Wrapper>
                {React.Children.map(children, (child, i) => {
                    return React.Children.map(child.props.children, gchild => {
                        if (gchild.type.displayName === "Title") {
                            return React.cloneElement(gchild, {
                                onClick: this.toggleActive
                            });
                        }
                        return gchild;
                    });
                })}
            </Wrapper>
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

Accordion.propTypes = {
    children: PropTypes.node.isRequired
};

export default Accordion;
