import React, { Component } from "react";
import { withLanguageContext } from "../../components/Language";
import PropTypes from "prop-types";

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
