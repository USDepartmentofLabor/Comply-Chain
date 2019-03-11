import PropTypes from "prop-types";
import React, { Component } from "react";
import { withLanguageContext } from "../../components/Language";

class About extends Component {
    render() {
        const { localizor, pdf } = this.props;
        const AboutInfo = localizor.strings.info.about.content;
        return <AboutInfo pdf={pdf} />;
    }
}

About.propTypes = {
    localizor: PropTypes.object.isRequired
};

export default withLanguageContext(About);
