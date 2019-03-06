import React, { Component } from "react";
import { withLanguageContext } from "../../components/Language";
import PropTypes from "prop-types";

class WhyDevelop extends Component {
    render() {
        const { localizor } = this.props;
        const WhyDevelopInfo = localizor.strings.info.whyDevelop.content;
        return <WhyDevelopInfo />;
    }
}

WhyDevelop.propTypes = {
    localizor: PropTypes.object.isRequired
};

export default withLanguageContext(WhyDevelop);
