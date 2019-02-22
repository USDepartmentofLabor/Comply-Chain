import React, { Component } from "react";
import { Input } from "semantic-ui-react";
import "./App.css";
import Breadcrumbs from "./common/Menu/Breadcrumbs";
import LanguageSwitcherContainer from "./common/Menu/LanguageSwitcher";
import NavBar from "./common/Menu/NavBar";
import { AppLink, Navigator } from "./common/Navigation";
import Routes from "./modules/config/routes";
import { strings } from "./modules/config/strings";

const navBarLeftItems = [
    { component: <Input placeholder={`${strings.search}...`} /> },
    {
        props: {
            as: AppLink,
            to: Routes.Home.path,
            content: "Home",
            key: "home"
        }
    },
    {
        props: {
            as: AppLink,
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
