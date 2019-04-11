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
import BottomDrawer from "../Menu/BottomDrawer/BottomDrawer";

const Main = styled.div`
    padding: 0 10px;
`;

const MainWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-top: 5.2em;
    margin-top: calc(5.2em + constant(safe-area-inset-top));
    margin-top: calc(5.2em + env(safe-area-inset-top));
    margin-bottom: 3.2em;
    margin-bottom: calc(3.2em + constant(safe-area-inset-bottom));
    margin-bottom: calc(3.2em + env(safe-area-inset-bottom));
    overflow-y: scroll;
`;

const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
`;

const Footer = styled.div`
    position: fixed;
    bottom: 0;
`;

const StepBarWrapper = styled.div`
    background-color: ${theme.colors.grayLightest};
    padding: 30px 30px;
    border-bottom: 1px solid ${theme.colors.grayLight};
`;

const NavbarWrapper = styled.div``;

const Container = styled.div`
    margin-top: 1.8em;
    margin-bottom: 0.8em;
    margin-left: auto;
    margin-right: auto;
    max-width: 900px;
    width: 100%;
`;
class AppWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { ...this.updateNavBarItems(), bottomDrawerActive: false };
    }
    componentDidUpdate(prevProps) {
        if (prevProps.localizor.language !== this.props.localizor.language) {
            this.setState({ ...this.updateNavBarItems() });
        }
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
                        to: Routes.Bookmarks.path,
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
                        as: "span",
                        id: "about-link",
                        onClick: () => this.toggleBottomDrawer()
                    },
                    icon: Icons.About,
                    label: localizor.strings.general.about
                }
            ],

            bottomDrawerItems: [
                {
                    props: {
                        as: NavLink,
                        id: "bottom-drawer-about-link",
                        to: Routes.About.path
                    },
                    label: localizor.strings.info.about.title
                },
                {
                    props: {
                        as: NavLink,
                        id: "bottom-drawer-findings-link",
                        to: Routes.Findings.path
                    },
                    label: localizor.strings.info.findings.title
                },
                {
                    props: {
                        as: NavLink,
                        id: "bottom-drawer-goods-link",
                        to: Routes.Goods.path
                    },
                    label: localizor.strings.info.goods.title
                }
            ]
        };
        return items;
    };
    toggleBottomDrawer = () => {
        this.setState({ bottomDrawerActive: !this.state.bottomDrawerActive });
    };
    render() {
        const {
            navBarLeftItems,
            bottomNavItems,
            bottomDrawerActive,
            bottomDrawerItems
        } = this.state;
        const { location } = this.props;
        return (
            <ScrollToTop>
                <Header>
                    <NavbarWrapper>
                        <BrandStrip />
                        <NavBar leftItems={navBarLeftItems} />
                    </NavbarWrapper>
                </Header>
                <MainWrapper id="main">
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
                </MainWrapper>
                <Footer>
                    <BottomDrawer
                        id="bototm-drawer"
                        active={bottomDrawerActive}
                        items={bottomDrawerItems}
                        onClose={() => {
                            this.setState({ bottomDrawerActive: false });
                        }}
                    />
                    <BottomNavBar id="bottom-nav-bar" items={bottomNavItems} />
                </Footer>
            </ScrollToTop>
        );
    }
}

AppWrapper.propTypes = {
    location: PropTypes.object.isRequired,
    localizor: PropTypes.object.isRequired
};

export default withRouter(withLanguageContext(AppWrapper));
