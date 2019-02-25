import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
    float: left;
    overflow: hidden;
`;

class Dropdown extends Component {
    state = { active: false };

    toggleActive = () => {
        this.setState({ active: !this.state.active });
    };

    generatePropsForChild = child => {
        const { active } = this.state;
        if (child.type.displayName === "Title") {
            return React.cloneElement(child, {
                onClick: this.toggleActive
            });
        }

        if (child.type.displayName === "Content") {
            if (!active) {
                return null;
            }
            return React.cloneElement(child, {
                onClick: this.toggleActive
            });
        }

        return child;
    };
    render() {
        const { children } = this.props;
        return (
            <Wrapper>
                {React.Children.map(children, (child, i) => {
                    if (child.type === "div") {
                        return React.Children.map(
                            child.props.children,
                            gchild => {
                                return this.generatePropsForChild(gchild);
                            }
                        );
                    }
                    return this.generatePropsForChild(child);
                })}
            </Wrapper>
        );
    }
}

Dropdown.Title = styled.div`
    cursor: pointer;
    font-size: 16px;
    border: none;
    outline: none;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
`;

Dropdown.Title.displayName = "Title";

Dropdown.Content = styled.div`
    display: block;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
`;

Dropdown.Content.displayName = "Content";

Dropdown.Item = styled.div`
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;

    &:hover {
        background-color: #ddd;
    }
`;

Dropdown.Item.displayName = "Item";

Dropdown.propTypes = {
    children: PropTypes.node.isRequired
};

export default Dropdown;
