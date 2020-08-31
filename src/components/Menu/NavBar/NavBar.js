import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";
import { isBrowser } from "../../../modules/utils/platform";
import Button from "../../Button";
import Icons from "../../Icons";
import { withLanguageContext } from "../../Language";
import Breadcrumbs from "../Breadcrumbs";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import SideNav from "../SideNav";
import { theme } from "../../../modules/config/theme";

const NavbarRoot = styled.div`
    background-color: #fff;
    border-bottom: 1px solid ${theme.colors.grayLight};
    width: 100%;
    z-index: 100;
`;

const NavbarWrapper = styled.div`
    display: flex;
    padding: 5px 5px;
    justify-content: space-between;
    align-items: center;
`;

const NavItem = styled.div`
    text-align: center;
    padding: 14px 14px;
    text-decoration: none;
    font-size: 17px;
    cursor: pointer;
`;

const SideNavFooter = styled.div`
    padding-bottom: 7em;
    padding-bottom: calc(7em + constant(safe-area-inset-bottom));
    padding-bottom: calc(7em + env(safe-area-inset-bottom));
`;

const MenuButton = styled(Button)`
    padding: 16px 16px;
    width: 90px;
    height: 55px;
    &:hover {
        background-color: ${theme.colors.primaryDarker};
        outline: solid 3px #3d3d3d;
    };
    &:focus {
        background-color: ${theme.colors.primaryDarker};
        outline: solid 3px #3d3d3d;
    };
    &:active {
        background-color: ${theme.colors.primaryDarker};
        outline: solid 3px #3d3d3d;
    }
`;

const StepsMenuItem = styled(SideNav.Item)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 17px;
    font-weight: bold;
    svg {
        font-size: 25px;
    }
    text-align: left;
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    outline: none;
    border-bottom: 2px solid ${theme.colors.primaryDarker};
`;

const StepWrapper = styled.div`
    display: flex;
    align-items: center;

    svg {
        font-size: 25px;
    }
`;

const StepIcon = styled.span`
    flex-shrink: 0;
`;
const StepText = styled.span`
    padding-left: 15px;
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

    componentWillMount() {
                document.addEventListener("keydown", this.handleKeyPress, false);
        }

    handleKeyPress = e => {
       const { visible, stepAccordionActive } = this.state;
       if (!stepAccordionActive && e.target.id === 'what-are-link') {
         e.target.nextSibling.ariaLive='assertive';
         e.target.nextSibling.ariaRoleDescription='Closed Drop down Menu click enter to Open';
       } else if (!stepAccordionActive && e.target.id === 'steps-dropdown' && e.key==="Enter") {
          e.target.ariaLive='assertive';
          e.target.ariaRoleDescription='Drop down Menu Opened';
        } else if (stepAccordionActive && e.target.id === 'steps-dropdown') {
         e.target.ariaLive='assertive';
         e.target.ariaRoleDescription='Opened Drop down Menu click Enter to Close';
       } else if (stepAccordionActive && e.target.id === 'steps-dropdown' && e.key==="Enter") {
         e.target.ariaLive='assertive';
         e.target.ariaRoleDescription='Drop down Menu Closed';
       }

       if (!visible) {
        document.getElementById('what-are-link').tabIndex="1";
        document.getElementById('steps-dropdown').tabIndex="1";
        document.getElementById('en-btn').tabIndex="1";
        document.getElementById('es-btn').tabIndex="1";
        document.getElementById('fr-btn').tabIndex="1";
        document.getElementById('ms-btn').tabIndex="1";
        } else if (visible) {
        document.getElementById('what-are-link').tabIndex="0";
        document.getElementById('steps-dropdown').tabIndex="0";
        document.getElementById('en-btn').tabIndex="0";
        document.getElementById('es-btn').tabIndex="0";
        document.getElementById('fr-btn').tabIndex="0";
        document.getElementById('ms-btn').tabIndex="0";
        }
    };


    onBackButtonPressed = e => {
        e.preventDefault();
        const { visible } = this.state;
        const { location } = this.props;
        if (visible) {
            this.handleSideNavClose();
        } else {
            if (location.pathname === "/") {
                navigator.app.exitApp();
            } else {
                navigator.app.backHistory();
            }
        }
    };

    toggleSideNav = () => {
        const { visible } = this.state;
        const { onSideNavToggle } = this.props;
        this.setState({ visible: !visible });
        if (onSideNavToggle) {
            onSideNavToggle(!visible);
        }
    };

    handleSideNavClose = () => {
        const { onSideNavToggle } = this.props;
        this.setState({ visible: false, stepAccordionActive: false });
        if (onSideNavToggle) {
            onSideNavToggle(false);
        }
    };

    toggleStepAccordion = () => {
        const { stepAccordionActive } = this.state;
        this.setState({ stepAccordionActive: !stepAccordionActive }, () => {
            this.stepsAccordion.focus();
        });
    };
    render() {
        const { visible, stepAccordionActive } = this.state;
        const { leftItems, rightItems, id, localizor, backUrl } = this.props;
        return (
            <div id={id}>
                <NavbarRoot>
                    <NavbarWrapper>
                        <span id="navbar-left-items">
                            <NavItem
                                as={Breadcrumbs}
                                backUrl={backUrl}
                                id="breadcrumbs"
                            />
                        </span>
                        <span id="navbar-right-items">
                            <NavItem
                                id="menu-btn"
                                as={MenuButton}
                                right
                                onClick={this.toggleSideNav}
                                onKeyDown={this.handleKeyPress}
                                ref={node => (this.closeBtn = node)}
                            >
                                {!visible && localizor.strings.general.menu}
                                {visible && localizor.strings.general.close}
                            </NavItem>
                            {rightItems.map((item, i) => (
                                <NavItem aria-live="polite"
                                    {...item.props}
                                    right
                                    key={"mobile_right_" + i}
                                >
                                    {item.props && item.props.content}
                                </NavItem>
                            ))}
                        </span>
                    </NavbarWrapper>
                </NavbarRoot>

                <SideNav
                    id="side-nav"
                    visible={visible}
                    onClose={this.handleSideNavClose}
                    clickable={"menu-btn"}
                >
                    <div id="side-nav-main-content">
                        {leftItems.map((item, i) => (
                            <SideNav.Item
                                {...item.props}
                                key={"mobile_left_" + i}
                                onClick={this.handleSideNavClose}
                                dimmed={stepAccordionActive ? 1 : 0}
                            >
                                {item.props && item.props.content}
                            </SideNav.Item>
                        ))}
                        <StepsMenuItem
                            id="steps-dropdown"
                            onClick={this.toggleStepAccordion}
                            as="button"
                            ref={node => (this.stepsAccordion = node)}
                        >
                            {localizor.strings.general.stepsToBasic}
                            <StepIcon>
                                {!stepAccordionActive && (
                                    <Icons.ArrowCircleRight />
                                )}
                                {stepAccordionActive && (
                                    <Icons.ArrowCircleDown />
                                )}
                            </StepIcon>
                        </StepsMenuItem>

                        {stepAccordionActive &&
                            localizor.strings.steps.map((step, i) => {
                                return (
                                    <SideNav.IdentedItem
                                        as={NavLink}
                                        to={`/steps/${i + 1}`}
                                        key={step.title}
                                        id={`step-${i + 1}-link`}
                                        onClick={this.handleSideNavClose}
                                    >
                                        <StepWrapper>
                                            <StepIcon>
                                                <Icons.StepIcon step={i + 1} />
                                            </StepIcon>
                                            <StepText>{step.title}</StepText>
                                        </StepWrapper>
                                    </SideNav.IdentedItem>
                                );
                            })}
                    </div>
                    <SideNavFooter id="side-nav-footer">
                        <LanguageSwitcher />
                    </SideNavFooter>
                </SideNav>
            </div>
        );
    }
}

NavBar.propTypes = {
    id: PropTypes.string,
    leftItems: PropTypes.arrayOf(PropTypes.object),
    rightItems: PropTypes.arrayOf(PropTypes.object),
    localizor: PropTypes.object.isRequired,
    backUrl: PropTypes.string
};

NavBar.defaultProps = {
    leftItems: [],
    rightItems: []
};

export default withRouter(withLanguageContext(NavBar));
