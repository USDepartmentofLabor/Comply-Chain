import React, { Component } from "react";
import { Localize } from "../../modules/config/strings";

class KeyResources extends Component {
    render() {
        const KeyResourcesInfo = Localize.getStrings().info.keyResources;
        return <KeyResourcesInfo />;
    }
}

export default KeyResources;
