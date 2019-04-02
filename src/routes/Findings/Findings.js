import PropTypes from "prop-types";
import React, { Component } from "react";
import { withLanguageContext } from "../../components/Language";

class Findings extends Component {
    render() {
        const { localizor } = this.props;
        const FindingsInfo = localizor.strings.info.findings.content;
        return <FindingsInfo />;
    }
}

Findings.propTypes = {
    localizor: PropTypes.object.isRequired
};

export default withLanguageContext(Findings);
