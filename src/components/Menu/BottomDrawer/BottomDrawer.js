import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../../../modules/config/theme";

class BottomDrawer extends Component {
    state = {
        active: this.props.active
    };

    render() {
        const { active, items, id } = this.props;
        return (
            <Wrapper id={id} active={active}>
                <Content>
                    {items.map((item, i) => {
                        return (
                            <ContentItem
                                {...item.props}
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
    background-color: ${theme.colors.primary};
    height: ${props => (props.active ? "auto" : "0")};
    max-height: 300px;
    width: 100%;
    position: fixed;
    z-index: 1;
    bottom: 57px;
    left: 0;
    overflow-y: hidden;
    transition: 1.5s ease-out;

    box-shadow: 0px -5px 8px rgba(${theme.colors.grayDarkRGB}, 0.75);
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
    border-bottom: solid 2px ${theme.colors.primaryDarker};
    padding: 10px 10px;
    color: ${theme.colors.white};
    font-size: 1.25em;
    font-family: ${theme.fonts.headings};
    font-weight: bold;
`;

BottomDrawer.propTypes = {
    active: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BottomDrawer;
