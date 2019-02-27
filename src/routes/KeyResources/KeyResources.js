import React, { Component } from "react";
import { withLanguageContext } from "../../common/Language";

class KeyResources extends Component {
    render() {
        const { localizor } = this.props;
        const KeyResourcesInfo = localizor.strings.info.keyResources.content;
        return <KeyResourcesInfo />;
    }
}

export default withLanguageContext(KeyResources);
