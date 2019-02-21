import React, { Component } from "react";
import { strings } from "../../../modules/config/strings";
import LanguageSwitcherView from "./LanguageSwitcherView";

class AbstractLanguageSwitcherContainer extends Component {
    onLanguageChange = () => {
        throw new TypeError(
            "Abstract method onLanguageChange is not implemented"
        );
    };
    render() {
        return (
            <LanguageSwitcherView
                currentLanguage={strings.getLanguage()}
                languages={strings.getAvailableLanguages()}
                onClick={this.onLanguageChange}
            />
        );
    }
}

export default AbstractLanguageSwitcherContainer;
