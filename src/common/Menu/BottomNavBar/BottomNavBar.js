import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "../../../modules/config/theme";

const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #e0e0e0;
    background-color: ${theme.colors.grayLightest};
    z-index: 1;
`;

const NavItem = styled.div`
    padding: 8px 12px;
    min-width: 56px;
    max-width: 144px;
    flex: 1 1 auto;
    color: ${theme.colors.primaryDarkest};
    text-decoration: none;

    &:not(:last-child) {
        margin-right: 12px;
    }

    &.active {
        color: ${theme.colors.primary};
    }
`;

NavItem.Icon = styled.div`
    display: block;
    width: 1em;
    height: 1em;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4px;
    font-size: 24px;
`;
NavItem.Label = styled.span`
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    display: block;
    font-size: 12px;
`;
class BottomNavBar extends Component {
    render() {
        const { items } = this.props;
        return (
            <Wrapper>
                {items.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <NavItem {...item.props} key={"bottom_nav_" + i}>
                            <NavItem.Icon>
                                <Icon />
                            </NavItem.Icon>
                            <NavItem.Label>{item.label}</NavItem.Label>
                        </NavItem>
                    );
                })}
            </Wrapper>
        );
    }
}

export default BottomNavBar;
