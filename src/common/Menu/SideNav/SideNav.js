import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../../../modules/config/theme";

class SideNav extends Component {
    state = { width: "260px", visible: false };

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
            <Wrapper id={id} width={width} visible={visible}>
                {React.Children.map(children, child => {
                    return child;
                })}
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    height: 100%;
    width: ${props => {
        if (props.visible) {
            return props.width;
        }
        return 0;
    }};
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: ${theme.colors.primary};
    overflow-x: hidden;
    transition: 0.5s;
`;

SideNav.Item = styled.div`
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 1em;
    font-weight: bold;
    color: ${theme.colors.white};
    display: block;
    transition: 0.3s;
    border-bottom: 2px solid ${theme.colors.primaryDarker};
    cursor: pointer;

    &:hover {
        color: #f1f1f1;
    }
`;

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
