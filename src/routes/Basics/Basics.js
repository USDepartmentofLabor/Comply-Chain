import React, { Component } from "react";
import { withLanguageContext } from "../../components/Language";
import PropTypes from "prop-types";
import Bookmarkable from "../../components/Bookmarkable";
import { withRouter } from "react-router-dom";
class Basics extends Component {
    render() {
        const { localizor, location } = this.props;
        const BasicsInfo = localizor.strings.info.basics.content;
        return (
            <Bookmarkable
                titleString="info.basics.title"
                url={location.pathname}
            >
                <BasicsInfo />
            </Bookmarkable>
        );
    }
}

Basics.propTypes = {
    localizor: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default withRouter(withLanguageContext(Basics));
