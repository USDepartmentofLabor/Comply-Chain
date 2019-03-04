import PropTypes from "prop-types";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../modules/config/theme";
import { withLanguageContext } from "../../Language";

const LanguageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & * {
        margin-bottom: 10px;
    }
`;

const LanguageButton = styled.button`
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border-radius: 4px;
    padding: 15px 48px;
    display: inline-block;
    font-size: 1em;
    font-weight: bold;
    border: 1px solid ${theme.colors.white};

    &:hover {
        background-color: ${theme.colors.primaryDarker};
    }
`;

class LanguageSwitcher extends Component {
    constructor(props) {
        super(props);
        const { localizor } = this.props;
        this.state = {
            languages: localizor.availableLanguages,
            currentLanguage: localizor.language
        };
    }
    handleLanguageChange = lang => {
        const { history, localizor } = this.props;
        localizor.setLanguage(lang);
        this.setState({ currentLanguage: lang });
        history.push(`${history.location.pathname}?lang=${lang}`);
    };
    render() {
        return (
            <LanguageWrapper id="language-switcher">
                <LanguageButton
                    onClick={() => {
                        this.handleLanguageChange("en");
                    }}
                >
                    English
                </LanguageButton>
                <LanguageButton
                    onClick={() => {
                        this.handleLanguageChange("es");
                    }}
                >
                    Espanol
                </LanguageButton>
                <LanguageButton
                    onClick={() => {
                        this.handleLanguageChange("fr");
                    }}
                >
                    Francais
                </LanguageButton>
            </LanguageWrapper>
        );
    }
}

LanguageSwitcher.propTypes = {
    localizor: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default withRouter(withLanguageContext(LanguageSwitcher));
