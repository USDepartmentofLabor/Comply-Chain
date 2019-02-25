import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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
        const { children } = this.props;
        return (
            <Wrapper width={width} visible={visible}>
                <CloseButton onClick={this.close}>&times;</CloseButton>
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
    background-color: #fff;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
`;

SideNav.Item = styled.div`
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;

    &:hover {
        color: #f1f1f1;
    }
`;

const CloseButton = styled(SideNav.Item)`
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    cursor: pointer;
`;
SideNav.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node
};

export default SideNav;
