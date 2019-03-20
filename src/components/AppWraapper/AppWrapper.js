import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";
import Routes from "../../modules/config/routes";
import { theme } from "../../modules/config/theme";
import BrandStrip from "../BrandStrip";
import Icons from "../Icons";
import { withLanguageContext } from "../Language";
import BottomNavBar from "../Menu/BottomNavBar";
import NavBar from "../Menu/NavBar";
import { Navigator } from "../Navigation";
import Share from "../Share";
import StepProgressBar from "../StepProgessBar/StepProgressBar";
import ScrollToTop from "./ScrollToTop";

const Main = styled.div`
    margin: 0;
    padding: 0 10px;
`;

const StepBarWrapper = styled.div`
    background-color: ${theme.colors.grayLightest};
    padding: 30px 30px;
    border-bottom: 1px solid ${theme.colors.grayLight};
    margin-bottom: -5.2em;
`;

const NavbarWrapper = styled.div`
    margin-bottom: 5.2em;
`;

const Container = styled.div`
    margin-top: 7em;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4em;
    max-width: 900px;
    width: 100%;
`;
class AppWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = this.updateNavBarItems();
    }

    updateNavBarItems = () => {
        const { localizor } = this.props;
        const items = {
            navBarLeftItems: [
                {
                    props: {
                        as: NavLink,
                        to: Routes.WhatAre.path,
                        content: localizor.strings.info.whatAre.title,
                        id: "what-are-link",
                        key: "whatAre"
                    }
                },
                {
                    props: {
                        as: NavLink,
                        to: Routes.WhyDevelop.path,
                        content: localizor.strings.info.whyDevelop.title,
                        id: "why-develop-link",
                        key: "whyDevelop"
                    }
                },
                {
                    props: {
                        as: NavLink,
                        to: Routes.Basics.path,
                        content: localizor.strings.info.basics.title,
                        id: "basics-link",
                        key: "basics"
                    }
                }
            ],

            bottomNavItems: [
                {
                    props: {
                        as: NavLink,
                        to: "/bookmarks",
                        id: "bookmarks-link"
                    },
                    icon: Icons.Bookmarks,
                    label: localizor.strings.general.bookmarks
                },
                {
                    props: {
                        as: NavLink,
                        to: "/search",
                        id: "search-link"
                    },
                    icon: Icons.Search,
                    label: localizor.strings.general.search
                },
                {
                    props: {
                        as: Share,
                        id: "share-link"
                    },
                    icon: Icons.Share,
                    label: localizor.strings.general.share
                },
                {
                    props: {
                        as: NavLink,
                        to: "/about",
                        id: "about-link"
                    },
                    icon: Icons.HelpCircle,
                    label: localizor.strings.general.about
                }
            ]
        };
        return items;
    };
    componentDidUpdate(prevProps) {
        if (prevProps.localizor.language !== this.props.localizor.language) {
            this.setState({ ...this.updateNavBarItems() });
        }
    }
    render() {
        const { navBarLeftItems, bottomNavItems } = this.state;
        const { location } = this.props;
        return (
            <ScrollToTop>
                <BrandStrip />
                <NavbarWrapper>
                    <NavBar leftItems={navBarLeftItems} />
                </NavbarWrapper>
                {location.pathname !== Routes.Home.path && (
                    <StepBarWrapper id="step_progess_bar">
                        <StepProgressBar />
                    </StepBarWrapper>
                )}
                <Main>
                    <Container id="container">
                        <Navigator />
                    </Container>
                </Main>
                <BottomNavBar id="bottom-nav-bar" items={bottomNavItems} />
            </ScrollToTop>
        );
    }
}

AppWrapper.propTypes = {
    location: PropTypes.object.isRequired,
    localizor: PropTypes.object.isRequired
};

export default withRouter(withLanguageContext(AppWrapper));
