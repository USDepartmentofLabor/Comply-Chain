import React, { Component } from "react";
import { IoMdArrowDropdown as Icon } from "react-icons/io";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "../../Dropdown";
import { withLanguageContext } from "../../Language";
import PropTypes from "prop-types";

const DropdownIcon = styled.span`
    vertical-align: middle;
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
        const { languages, currentLanguage } = this.state;
        return (
            <Dropdown id="language-switcher">
                <Dropdown.Title>
                    {currentLanguage}
                    <DropdownIcon>
                        <Icon />
                    </DropdownIcon>
                </Dropdown.Title>
                <Dropdown.Content>
                    {languages.map((lang, i) => {
                        return (
                            <Dropdown.Item
                                key={i}
                                onClick={() => this.handleLanguageChange(lang)}
                            >
                                {lang}
                            </Dropdown.Item>
                        );
                    })}
                </Dropdown.Content>
            </Dropdown>
        );
    }
}

LanguageSwitcher.propTypes = {
    localizor: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default withRouter(withLanguageContext(LanguageSwitcher));
