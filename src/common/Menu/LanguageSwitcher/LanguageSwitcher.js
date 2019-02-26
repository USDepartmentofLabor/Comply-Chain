import React, { Component } from "react";
import { IoMdArrowDropdown as Icon } from "react-icons/io";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Localize } from "../../../modules/config/strings";
import Dropdown from "../../Dropdown";

const DropdownIcon = styled.span`
    vertical-align: middle;
`;

class LanguageSwitcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: Localize.getAvailableLanguages(),
            currentLanguage: Localize.getLanguage()
        };
    }
    handleLanguageChange = lang => {
        const { history } = this.props;
        Localize.setLanguage(lang);
        this.setState({ currentLanguage: lang });
        history.push(`${history.location.pathname}?lang=${lang}`);
    };
    render() {
        const { languages, currentLanguage } = this.state;
        return (
            <Dropdown>
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

export default withRouter(LanguageSwitcher);
