import React, { Component } from "react";
import { withLanguageContext } from "../../common/Language";
import PropTypes from "prop-types";
class Basics extends Component {
    render() {
        const { localizor } = this.props;
        const BasicsInfo = localizor.strings.info.basics.content;
        return <BasicsInfo />;
    }
}

Basics.propTypes = {
    localizor: PropTypes.object.isRequired
};

export default withLanguageContext(Basics);
