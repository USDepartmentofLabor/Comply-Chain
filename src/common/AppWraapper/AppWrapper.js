import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Routes from "../../modules/config/routes";
import { withLanguageContext } from "../Language";
import Breadcrumbs from "../Menu/Breadcrumbs";
import LanguageSwitcher from "../Menu/LanguageSwitcher";
import NavBar from "../Menu/NavBar";
import { Navigator } from "../Navigation";
import PropTypes from "prop-types";

class AppWrapper extends Component {
    state = {
        navBarLeftItems: [
            {
                props: {
                    as: NavLink,
                    to: Routes.Home.path,
                    content: this.props.localizor.strings.general.home,
                    key: "home"
                }
            },
            {
                props: {
                    as: NavLink,
                    to: Routes.Steps.path,
                    content: this.props.localizor.strings.general.steps,
                    key: "steps"
                }
            },
            {
                props: {
                    as: NavLink,
                    to: Routes.KeyResources.path,
                    content: this.props.localizor.strings.info.keyResources
                        .title,
                    key: "keyResources"
                }
            },
            {
                props: {
                    as: NavLink,
                    to: Routes.WhyDevelop.path,
                    content: this.props.localizor.strings.info.whyDevelop.title,
                    key: "whyDeveloper"
                }
            },
            {
                props: {
                    as: NavLink,
                    to: Routes.WhatAre.path,
                    content: this.props.localizor.strings.info.whatAre.title,
                    key: "whatAre"
                }
            },
            {
                props: {
                    as: NavLink,
                    to: Routes.About.path,
                    content: this.props.localizor.strings.info.about.title,
                    key: "about"
                }
            }
        ],

        navBarRightItems: [{ props: { as: LanguageSwitcher } }]
    };
    render() {
        const { navBarLeftItems, navBarRightItems } = this.state;
        return (
            <NavBar leftItems={navBarLeftItems} rightItems={navBarRightItems}>
                <Breadcrumbs id="breadcrumbs" className="breadcrumbs" />
                <Navigator />
            </NavBar>
        );
    }
}

AppWrapper.propTypes = {
    localizor: PropTypes.object.isRequired
};

export default withLanguageContext(AppWrapper);
