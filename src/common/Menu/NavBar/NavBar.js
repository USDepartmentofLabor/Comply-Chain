import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import SideNav from "../SideNav";

const NavbarWrapper = styled.div`
    overflow: hidden;
    background-color: #fff;
    border-bottom: 1px solid #f1f1f1;
`;

const NavItem = styled.div`
    float: ${props => {
        if (props.right) {
            return "right";
        }
        return "left";
    }};
    display: block;
    text-align: center;
    padding: 14px 14px;
    text-decoration: none;
    font-size: 17px;
    cursor: pointer;

    &:hover {
        background-color: #ddd;
        color: black;
    }
`;

const Container = styled.div`
    margin-top: 5em;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
`;

class NavBar extends Component {
    state = { visible: false };

    toggleSideNav = () => {
        const { visible } = this.state;
        this.setState({ visible: !visible });
    };

    handleSideNavClose = () => {
        this.setState({ visible: false });
    };
    render() {
        const { visible } = this.state;
        const { leftItems, rightItems, children } = this.props;
        return (
            <div>
                <NavbarWrapper>
                    <SideNav
                        visible={visible}
                        onClose={this.handleSideNavClose}
                    >
                        {leftItems.map((item, i) => (
                            <SideNav.Item
                                {...item.props}
                                key={"mobile_left_" + i}
                            >
                                {item.props && item.props.content}
                            </SideNav.Item>
                        ))}
                    </SideNav>

                    <NavItem onClick={this.toggleSideNav}>Menu</NavItem>
                    {rightItems.map((item, i) => (
                        <NavItem
                            {...item.props}
                            right
                            key={"mobile_right_" + i}
                        >
                            {item.props && item.props.content}
                        </NavItem>
                    ))}
                </NavbarWrapper>
                <Container>{children}</Container>
            </div>
        );
    }
}

NavBar.propTypes = {
    children: PropTypes.node,
    leftItems: PropTypes.arrayOf(PropTypes.object),
    rightItems: PropTypes.arrayOf(PropTypes.object)
};

export default NavBar;
