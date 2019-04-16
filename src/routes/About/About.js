import PropTypes from "prop-types";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Bookmarkable from "../../components/Bookmarkable";
import { withLanguageContext } from "../../components/Language";

class About extends Component {
    render() {
        const { localizor, pdf, location } = this.props;
        const AboutInfo = localizor.strings.info.about.content;
        return (
            <Bookmarkable
                titleString="info.about.title"
                url={location.pathname}
                pdf={pdf}
            >
                <AboutInfo pdf={pdf} />
            </Bookmarkable>
        );
    }
}

About.propTypes = {
    localizor: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    pdf: PropTypes.bool
};

export default withRouter(withLanguageContext(About));
