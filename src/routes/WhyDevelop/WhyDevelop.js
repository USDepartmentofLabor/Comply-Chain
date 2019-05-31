import PropTypes from "prop-types";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Bookmarkable from "../../components/Bookmarkable";
import { withLanguageContext } from "../../components/Language";

class WhyDevelop extends Component {
    render() {
        const { localizor, location } = this.props;
        const WhyDevelopInfo = localizor.strings.info.whyDevelop.content;
        return (
            <Bookmarkable
                titleString="info.whyDevelop.title"
                url={location.pathname}
            >
                <WhyDevelopInfo />
            </Bookmarkable>
        );
    }
}

WhyDevelop.propTypes = {
    localizor: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default withRouter(withLanguageContext(WhyDevelop));
