import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import Breadcrumbs from "./common/Menu/Breadcrumbs";
import LanguageSwitcher from "./common/Menu/LanguageSwitcher";
import NavBar from "./common/Menu/NavBar";
import { Navigator } from "./common/Navigation";
import Routes from "./modules/config/routes";

const navBarLeftItems = [
    {
        props: {
            as: NavLink,
            to: Routes.Home.path,
            content: "Home",
            key: "home"
        }
    },
    {
        props: {
            as: NavLink,
            to: Routes.Steps.path,
            content: "Steps",
            key: "steps"
        }
    }
];

const navBarRightItems = [{ props: { as: LanguageSwitcher } }];

class App extends Component {
    render() {
        return (
            <NavBar leftItems={navBarLeftItems} rightItems={navBarRightItems}>
                <Breadcrumbs id="breadcrumbs" className="breadcrumbs" />
                <Navigator />
            </NavBar>
        );
    }
}

export default App;
