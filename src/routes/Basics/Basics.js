import React, { Component } from "react";
import { withLanguageContext } from "../../components/Language";
import PropTypes from "prop-types";
class Basics extends Component {
    render() {
        const { localizor, pdf } = this.props;
        const BasicsInfo = localizor.strings.info.basics.content;
        return <BasicsInfo pdf={pdf} />;
    }
}

Basics.propTypes = {
    localizor: PropTypes.object.isRequired,
    pdf: PropTypes.bool
};

export default withLanguageContext(Basics);
