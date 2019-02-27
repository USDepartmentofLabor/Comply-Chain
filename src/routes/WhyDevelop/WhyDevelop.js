import React, { Component } from "react";
import { withLanguageContext } from "../../common/Language";

class WhyDevelop extends Component {
    render() {
        const { localizor } = this.props;
        const WhyDevelopInfo = localizor.stringsO.info.whyDevelop.content;
        return <WhyDevelopInfo />;
    }
}

export default withLanguageContext(WhyDevelop);
