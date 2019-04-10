import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../../../modules/config/theme";

class BottomDrawer extends Component {
    state = {
        active: this.props.active
    };
    componentDidUpdate(prevProps) {
        if (prevProps.active !== this.props.active) {
            this.setState({ active: this.props.active });
        }
    }

    closeDrawer = () => {
        this.setState({ active: false });
        if (this.props.onClose) {
            this.props.onClose();
        }
    };

    render() {
        const { active, items } = this.props;
        return (
            <Wrapper active={active}>
                <Content>
                    {items.map((item, i) => {
                        return (
                            <ContentItem
                                {...item.props}
                                onClick={this.closeDrawer}
                                key={"bottom_drawer_" + i}
                            >
                                {item.label}
                            </ContentItem>
                        );
                    })}
                </Content>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    background-color: ${theme.colors.white};
    height: ${props => (props.active ? "auto" : "0")};
    max-height: 300px;
    width: 100%;
    position: fixed;
    z-index: 1;
    bottom: 57px;
    left: 0;
    overflow-y: hidden;
    transition: 1.5s ease-out;

    box-shadow: 0px -5px 3px rgba(${theme.colors.grayRGB}, 0.75);
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 100%;

    & > :last-child {
        border: none;
    }
`;

const ContentItem = styled.span`
    border-bottom: solid 1px ${theme.colors.gray};
    padding: 10px 10px;
    color: ${theme.colors.primaryDarkest};
    font-size: 1.5em;
`;

BottomDrawer.propTypes = {
    active: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BottomDrawer;
