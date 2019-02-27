import React, { Component } from "react";
import { withLanguageContext } from "../../common/Language";

class Basics extends Component {
    render() {
        const { localizor } = this.props;
        const BasicsInfo = localizor.strings.info.basic.content;
        return <BasicsInfo />;
    }
}

export default withLanguageContext(Basics);
