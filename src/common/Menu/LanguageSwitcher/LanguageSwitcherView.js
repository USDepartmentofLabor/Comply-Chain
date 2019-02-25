import PropTypes from "prop-types";
import React, { Component } from "react";

class LanguageSwitcherView extends Component {
    render() {
        const { currentLanguage, languages, onClick } = this.props;
        return <div />;
    }
}

LanguageSwitcherView.propTypes = {
    currentLanguage: PropTypes.string,
    languages: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func.isRequired
};

export default LanguageSwitcherView;
