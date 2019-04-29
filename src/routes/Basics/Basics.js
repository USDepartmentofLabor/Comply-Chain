import React, { Component } from "react";
import { withLanguageContext } from "../../components/Language";
import PropTypes from "prop-types";
import Bookmarkable from "../../components/Bookmarkable";
import { withRouter } from "react-router-dom";
class Basics extends Component {
    render() {
        const { localizor, pdf, location } = this.props;
        const BasicsInfo = localizor.strings.info.basics.content;
        return (
            <Bookmarkable
                titleString="info.basics.title"
                url={location.pathname}
                pdf={pdf}
            >
                <BasicsInfo pdf={pdf} />
            </Bookmarkable>
        );
    }
}

Basics.propTypes = {
    localizor: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    pdf: PropTypes.bool
};

export default withRouter(withLanguageContext(Basics));
