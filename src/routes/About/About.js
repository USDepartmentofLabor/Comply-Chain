import React, { Component } from "react";
import { withLanguageContext } from "../../common/Language";
import PropTypes from "prop-types";

class About extends Component {
    render() {
        const { localizor } = this.props;
        const AboutInfo = localizor.strings.info.about.content;
        return <AboutInfo />;
    }
}

About.propTypes = {
    localizor: PropTypes.object.isRequired
};

export default withLanguageContext(About);
