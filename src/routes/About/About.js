import React, { Component } from "react";
import { Localize } from "../../modules/config/strings";

class About extends Component {
    render() {
        const AboutInfo = Localize.getStrings().info.about;
        return <AboutInfo />;
    }
}

export default About;
