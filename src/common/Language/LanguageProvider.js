import React, { Component } from "react";
import Localization from "./Localization";

export const LanguageContext = React.createContext({
    language: null,
    availableLanguages: null,
    setLanguage: () => {},
    strings: null
});

class LanguageProvider extends Component {
    constructor(props) {
        super(props);
        this.localize = new Localization();
        this.state = {
            language: this.localize.getLanguage(),
            availableLanguages: this.localize.getAvailableLanguages(),
            setLanguage: this.setLanguage,
            strings: this.localize.getStrings()
        };
    }

    setLanguage = lang => {
        this.localize.setLanguage(lang);
        if (this.state.language !== lang) {
            this.setState({ language: lang });
        }
    };

    render() {
        return (
            <LanguageContext.Provider value={this.state}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

export default LanguageProvider;
