import PropTypes from "prop-types";
import React, { Component } from "react";
import { withLanguageContext } from "../../components/Language";
import { withRouter } from "react-router-dom";
import Bookmarkable from "../../components/Bookmarkable";

class Findings extends Component {
    render() {
        const { localizor, pdf, location } = this.props;
        const FindingsInfo = localizor.strings.info.findings.content;
        return (
            <Bookmarkable
                titleString="info.findings.title"
                url={location.pathname}
                pdf={pdf}
            >
                <FindingsInfo />
            </Bookmarkable>
        );
    }
}

Findings.propTypes = {
    localizor: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    pdf: PropTypes.bool
};

export default withRouter(withLanguageContext(Findings));
