import React, { Component } from "react";
import { withLanguageContext } from "../../components/Language";
import PropTypes from "prop-types";

class WhyDevelop extends Component {
    render() {
        const { localizor, pdf } = this.props;
        const WhyDevelopInfo = localizor.strings.info.whyDevelop.content;
        return <WhyDevelopInfo pdf={pdf} />;
    }
}

WhyDevelop.propTypes = {
    localizor: PropTypes.object.isRequired,
    pdf: PropTypes.bool
};

export default withLanguageContext(WhyDevelop);
