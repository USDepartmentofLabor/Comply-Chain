import React, { Component } from "react";
import { Input } from "semantic-ui-react";
import "./App.css";
import Breadcrumbs from "./common/Menu/Breadcrumbs";
import LanguageSwitcherContainer from "./common/Menu/LanguageSwitcher";
import NavBar from "./common/Menu/NavBar";
import { Navigator } from "./common/Navigation";
import { NavLink } from "react-router-dom";
import Routes from "./modules/config/routes";
import { strings } from "./modules/config/strings";

const navBarLeftItems = [
    { component: <Input placeholder={`${strings.search}...`} /> },
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

const navBarRightItems = [{ as: LanguageSwitcherContainer }];

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
