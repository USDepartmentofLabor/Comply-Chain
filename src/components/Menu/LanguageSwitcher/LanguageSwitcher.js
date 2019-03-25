import PropTypes from "prop-types";
import React, { Component } from "react";
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
        const { localizor } = this.props;
        localizor.setLanguage(lang);
        this.setState({ currentLanguage: lang });
    };
    render() {
        return (
            <LanguageWrapper id="language-switcher">
                <LanguageButton
                    id="en-btn"
                    onClick={() => {
                        this.handleLanguageChange("en");
                    }}
                >
                    English
                </LanguageButton>
                <LanguageButton
                    id="es-btn"
                    onClick={() => {
                        this.handleLanguageChange("es");
                    }}
                >
                    Español
                </LanguageButton>
                <LanguageButton
                    id="fr-btn"
                    onClick={() => {
                        this.handleLanguageChange("fr");
                    }}
                >
                    Français
                </LanguageButton>
            </LanguageWrapper>
        );
    }
}

LanguageSwitcher.propTypes = {
    localizor: PropTypes.object.isRequired
};

export default withLanguageContext(LanguageSwitcher);
