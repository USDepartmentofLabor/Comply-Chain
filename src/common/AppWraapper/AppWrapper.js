import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Routes from "../../modules/config/routes";
import Icons from "../Icons";
import { withLanguageContext } from "../Language";
import BottomNavBar from "../Menu/BottomNavBar";
import Breadcrumbs from "../Menu/Breadcrumbs";
import NavBar from "../Menu/NavBar";
import { Navigator } from "../Navigation";
import ScrollToTop from "./ScrollToTop";

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
                    label: "Bookmarks"
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
                        as: NavLink,
                        to: "/share",
                        id: "share-link"
                    },
                    icon: Icons.Share,
                    label: "Share"
                },
                {
                    props: {
                        as: NavLink,
                        to: "/about",
                        id: "about-link"
                    },
                    icon: Icons.HelpCircle,
                    label: "About"
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
        return (
            <ScrollToTop>
                <NavBar leftItems={navBarLeftItems}>
                    <Breadcrumbs id="breadcrumbs" className="breadcrumbs" />
                    <Navigator />
                </NavBar>
                <BottomNavBar id="bottom-nav-bar" items={bottomNavItems} />
            </ScrollToTop>
        );
    }
}

AppWrapper.propTypes = {
    localizor: PropTypes.object.isRequired
};

export default withLanguageContext(AppWrapper);
