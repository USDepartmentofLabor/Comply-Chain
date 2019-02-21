import React, { Component } from "react";
import Breadcrumbs from "./common/Menu/Breadcrumbs";
import LanguageSwitcherContainer from "./common/Menu/LanguageSwitcher";
import NavBar from "./common/Menu/NavBar";
import { AppLink, Navigator } from "./common/Navigation";
import Routes from "./modules/config/routes";

const navBarLeftItems = [
    { as: AppLink, to: Routes.Home.path, content: "Home", key: "home" },
    {
        as: AppLink,
        to: Routes.Steps.path,
        content: "Steps",
        key: "steps"
    }
];

const navBarRightItems = [{ as: LanguageSwitcherContainer }];

class App extends Component {
    render() {
        return (
            <NavBar leftItems={navBarLeftItems} rightItems={navBarRightItems}>
                <Breadcrumbs />
                <Navigator />
            </NavBar>
        );
    }
}

export default App;
