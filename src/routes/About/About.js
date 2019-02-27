import React, { Component } from "react";
import { withLanguageContext } from "../../common/Language";

class About extends Component {
    render() {
        const { localizor } = this.props;
        const AboutInfo = localizor.strings.info.about.content;
        return <AboutInfo />;
    }
}

export default withLanguageContext(About);
