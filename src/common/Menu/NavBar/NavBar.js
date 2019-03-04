import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { isBrowser } from "../../../modules/utils/platform";
import Icons from "../../Icons";
import { withLanguageContext } from "../../Language";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import SideNav from "../SideNav";
import { withRouter } from "react-router-dom";

const NavbarWrapper = styled.div`
    position: fixed;
    top: 0;
    background-color: #fff;
    border-bottom: 1px solid #f1f1f1;
    width: 100%;
    z-index: 10;
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

const Main = styled.div`
    margin: 0;
    padding: 0 10px;
`;

const Container = styled.div`
    margin-top: 3em;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4em;
    max-width: 900px;
    width: 100%;
`;

const StepsMenuItem = styled(SideNav.Item)`
    display: flex;
    align-items: center;

    svg {
        font-size: 25px;
    }
`;

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false, stepAccordionActive: false };

        if (!isBrowser()) {
            document.addEventListener(
                "backbutton",
                this.onBackButtonPressed,
                false
            );
        }
    }

    onBackButtonPressed = e => {
        const { visible } = this.state;
        const { location } = this.props;
        if (visible) {
            e.preventDefault();
            this.handleSideNavClose();
        } else {
            e.preventDefault();
            if (location.pathname === "/") {
                navigator.app.exitApp();
            } else {
                navigator.app.backHistory();
            }
        }
    };

    toggleSideNav = () => {
        const { visible } = this.state;
        this.setState({ visible: !visible });
    };

    handleSideNavClose = () => {
        this.setState({ visible: false });
    };

    toggleStepAccordion = () => {
        const { stepAccordionActive } = this.state;
        this.setState({ stepAccordionActive: !stepAccordionActive });
    };
    render() {
        const { visible, stepAccordionActive } = this.state;
        const { leftItems, rightItems, children, id, localizor } = this.props;
        return (
            <div id={id}>
                <NavbarWrapper>
                    <SideNav
                        id="side-nav"
                        visible={visible}
                        onClose={this.handleSideNavClose}
                    >
                        <div>
                            <StepsMenuItem onClick={this.toggleStepAccordion}>
                                {localizor.strings.general.stepsToBasic}
                                {!stepAccordionActive && (
                                    <Icons.ArrowCircleRight />
                                )}
                                {stepAccordionActive && (
                                    <Icons.ArrowCircleDown />
                                )}
                            </StepsMenuItem>

                            {stepAccordionActive &&
                                localizor.strings.steps.map((step, i) => {
                                    return (
                                        <SideNav.IdentedItem
                                            as={NavLink}
                                            to={`/steps/${i + 1}`}
                                            key={step.title}
                                            onClick={this.handleSideNavClose}
                                        >
                                            {step.title}
                                        </SideNav.IdentedItem>
                                    );
                                })}
                            {leftItems.map((item, i) => (
                                <SideNav.Item
                                    {...item.props}
                                    key={"mobile_left_" + i}
                                    onClick={this.handleSideNavClose}
                                >
                                    {item.props && item.props.content}
                                </SideNav.Item>
                            ))}
                        </div>
                        <div>
                            <LanguageSwitcher />
                        </div>
                    </SideNav>

                    <NavItem right onClick={this.toggleSideNav}>
                        {!visible && localizor.strings.general.menu}
                        {visible && localizor.strings.general.close}
                    </NavItem>
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
                <Main>
                    <Container id="container">{children}</Container>
                </Main>
            </div>
        );
    }
}

NavBar.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node,
    leftItems: PropTypes.arrayOf(PropTypes.object),
    rightItems: PropTypes.arrayOf(PropTypes.object),
    localizor: PropTypes.object.isRequired
};

NavBar.defaultProps = {
    leftItems: [],
    rightItems: []
};

export default withRouter(withLanguageContext(NavBar));
