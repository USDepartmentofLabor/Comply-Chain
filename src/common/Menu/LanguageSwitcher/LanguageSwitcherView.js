import PropTypes from "prop-types";
import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

class LanguageSwitcherView extends Component {
    render() {
        const { currentLanguage, languages, onClick } = this.props;
        return (
            <Dropdown item text={currentLanguage}>
                <Dropdown.Menu>
                    {languages.map((lang, i) => {
                        return (
                            <Dropdown.Item
                                key={i}
                                value={lang}
                                onClick={onClick}
                            >
                                {lang}
                            </Dropdown.Item>
                        );
                    })}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

LanguageSwitcherView.propTypes = {
    currentLanguage: PropTypes.string,
    languages: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func.isRequired
};

export default LanguageSwitcherView;
