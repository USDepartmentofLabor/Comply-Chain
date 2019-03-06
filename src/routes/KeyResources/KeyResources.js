import React, { Component } from "react";
import { withLanguageContext } from "../../components/Language";
import PropTypes from "prop-types";

class KeyResources extends Component {
    render() {
        const { localizor } = this.props;
        const KeyResourcesInfo = localizor.strings.info.keyResources.content;
        return <KeyResourcesInfo />;
    }
}
KeyResources.propTypes = {
    localizor: PropTypes.object.isRequired
};

export default withLanguageContext(KeyResources);
