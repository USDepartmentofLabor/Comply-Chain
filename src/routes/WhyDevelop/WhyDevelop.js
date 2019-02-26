import React, { Component } from "react";
import { Localize } from "../../modules/config/strings";

class WhyDevelop extends Component {
    render() {
        const WhyDevelopInfo = Localize.getStrings().info.whyDevelop;
        return <WhyDevelopInfo />;
    }
}

export default WhyDevelop;
