import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../../../modules/config/theme";
import { isBrowser } from "../../../modules/utils/platform";

class SideNav extends Component {
    state = {
        width: (isBrowser() && "280px") || "100%",
        visible: this.props.visible || false
    };
    componentDidUpdate(prevProps) {
        if (prevProps.visible !== this.props.visible) {
            this.setState({ visible: this.props.visible });
        }
    }

    close = () => {
        const { onClose } = this.props;
        this.setState({ visible: false });
        if (onClose) {
            onClose();
        }
    };

    render() {
        const { width, visible } = this.state;
        const { children, id } = this.props;
        return (
            <RootSideNav id={id} width={width} visible={visible}>
                <FlexContainer>
                    {React.Children.map(children, child => {
                        return child;
                    })}
                </FlexContainer>
            </RootSideNav>
        );
    }
}

const RootSideNav = styled.div`
    height: 100%;
    width: ${props => {
        if (props.visible) {
            return props.width;
        }
        return 0;
    }};
    position: fixed;
    z-index: 500;
    top: auto;
    left: 0;
    background-color: ${theme.colors.primary};
    overflow-x: hidden;
    transition: all 0.3s ease;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    & > * {
        margin-bottom: 5px;
        flex-shrink: 0;
        min-width: 270px;
    }
`;

SideNav.Item = styled.div`
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    color: ${props =>
        props.dimmed ? theme.colors.grayLight : theme.colors.white};
    font-weight: bold;
    display: block;
    transition: 0.3s;
    border-bottom: 2px solid ${theme.colors.primaryDarker};
    cursor: pointer;

    &:hover {
        color: ${props =>
            props.dimmed ? theme.colors.gray : theme.colors.offWhite};
    }
`;

SideNav.Item.propTypes = {
    dimmed: PropTypes.bool
};

SideNav.IdentedItem = styled(SideNav.Item)`
    padding-left: 48px;
`;

SideNav.propTypes = {
    id: PropTypes.string,
    visible: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node
};

export default SideNav;
