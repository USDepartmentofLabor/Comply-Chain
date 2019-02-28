import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Routes from "../../modules/config/routes";
import { withLanguageContext } from "../Language";
import Breadcrumbs from "../Menu/Breadcrumbs";
import LanguageSwitcher from "../Menu/LanguageSwitcher";
import NavBar from "../Menu/NavBar";
import { Navigator } from "../Navigation";
import PropTypes from "prop-types";
import ScrollToTop from "./ScrollToTop";
import BottomNavBar from "../Menu/BottomNavBar";
import Icons from "../Icons";

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
                        to: Routes.Steps.path,
                        content: localizor.strings.general.steps,
                        key: "steps"
                    }
                },
                {
                    props: {
                        as: NavLink,
                        to: Routes.WhyDevelop.path,
                        content: localizor.strings.info.whyDevelop.title,
                        key: "whyDeveloper"
                    }
                },
                {
                    props: {
                        as: NavLink,
                        to: Routes.WhatAre.path,
                        content: localizor.strings.info.whatAre.title,
                        key: "whatAre"
                    }
                },
                {
                    props: {
                        as: NavLink,
                        to: Routes.KeyResources.path,
                        content: localizor.strings.info.keyResources.title,
                        key: "keyResources"
                    }
                },
                {
                    props: {
                        as: "a",
                        href: `mailto:GlobalKids@dol.gov?subject=${
                            localizor.strings.general.contactUsSubject
                        }`,
                        content: localizor.strings.general.contactUs
                    }
                }
            ],

            navBarRightItems: [{ props: { as: LanguageSwitcher } }],

            bottomNavItems: [
                {
                    props: {
                        as: NavLink,
                        to: "/bookmarks"
                    },
                    icon: Icons.Bookmarks,
                    label: "Bookmarks"
                },
                {
                    props: {
                        as: NavLink,
                        to: "/search"
                    },
                    icon: Icons.Search,
                    label: localizor.strings.general.search
                },
                {
                    props: {
                        as: NavLink,
                        to: "/share"
                    },
                    icon: Icons.Share,
                    label: "Share"
                },
                {
                    props: {
                        as: NavLink,
                        to: "/about"
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
        const {
            navBarLeftItems,
            navBarRightItems,
            bottomNavItems
        } = this.state;
        return (
            <ScrollToTop>
                <NavBar
                    leftItems={navBarLeftItems}
                    rightItems={navBarRightItems}
                >
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
