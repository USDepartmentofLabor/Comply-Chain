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
    display: inline-block;
    width: 155px;
    height: 50px;
    font-size: 1em;
    font-weight: bold;
    border: 1px solid ${theme.colors.white};
    &:hover {
        background-color: ${theme.colors.primaryDarker};
        outline: solid 3px #3d3d3d;
    };
    &:focus {
        background-color: ${theme.colors.primaryDarker};
        outline: solid 3px #3d3d3d;
    };
    &:active {
        background-color: ${theme.colors.primaryDarker};
        outline: solid 3px #3d3d3d;
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
        const main = document.getElementById("main");
        if (main) {
            localStorage.setItem("scrolly", main.scrollTop || window.scrollY);
        }
        localizor.setLanguage(lang);
        this.setState({ currentLanguage: lang });
        document.documentElement.lang = lang;
        /*TODO For keyBoard issue #171
        var inputs = document.getElementById('main').getElementsByTagName('input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute("lang",lang);
        }*/
        
    };
    render() {
        const { localizor } = this.props;
        return (
            <LanguageWrapper id="language-switcher">
                <LanguageButton
                    id="en-btn"
                    onClick={() => {
                        this.handleLanguageChange("en");
                    }}
                >
                    <span lang="en">{localizor.strings.general.english}</span>
                </LanguageButton>
                <LanguageButton
                    id="es-btn"
                    onClick={() => {
                        window.alert("THIS FEATURE IS COMING SOON");

                        // this.handleLanguageChange("es");
                    }}
                >
                    <span lang="es">{localizor.strings.general.spanish}</span>
                </LanguageButton>
                <LanguageButton
                    id="fr-btn"
                    onClick={() => {
                         window.alert("THIS FEATURE IS COMING SOON");
                        // this.handleLanguageChange("fr");
                    }}
                >
                    <span lang="fr">{localizor.strings.general.french}</span>
                </LanguageButton>
                <LanguageButton
                    id="ms-btn"
                    onClick={() => {
                       window.alert("THIS FEATURE IS COMING SOON");
                        // this.handleLanguageChange("ms");
                    }}
                >
                    <span lang="ms">{localizor.strings.general.malay}</span>
                </LanguageButton>
            </LanguageWrapper>
        );
    }
}

LanguageSwitcher.propTypes = {
    localizor: PropTypes.object.isRequired
};

export default withLanguageContext(LanguageSwitcher);
