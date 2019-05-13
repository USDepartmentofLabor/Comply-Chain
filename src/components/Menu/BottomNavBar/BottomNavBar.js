import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "../../../modules/config/theme";
import PropTypes from "prop-types";

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
    padding-bottom: constant(safe-area-inset-bottom); /* iOS 11.0 */
    padding-bottom: env(safe-area-inset-bottom); /* iOS 11.2 */
`;

const NavItem = styled.div`
    padding: 8px 0;
    min-width: 56px;
    max-width: 144px;
    flex: 1 1 auto;
    color: ${theme.colors.primaryDarkest};
    text-decoration: none;
    cursor: pointer;

    &:not(:last-child) {
        margin-right: 12px;
    }

    &.active {
        color: ${theme.colors.primaryDarker};
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
        const { items, id } = this.props;
        return (
            <Wrapper id={id}>
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

BottomNavBar.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.func.isRequired,
            label: PropTypes.string.isRequired,
            props: PropTypes.object
        })
    )
};

BottomNavBar.defaultProps = {
    items: []
};

export default BottomNavBar;
