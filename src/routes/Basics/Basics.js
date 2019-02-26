import React, { Component } from "react";
import { Localize } from "../../modules/config/strings";

class Basics extends Component {
    render() {
        const BasicsInfo = Localize.getStrings().info.basic;
        return <BasicsInfo />;
    }
}

export default Basics;
