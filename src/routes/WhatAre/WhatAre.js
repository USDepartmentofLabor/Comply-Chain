import React, { Component } from "react";
import { withLanguageContext } from "../../common/Language";

class WhatAre extends Component {
    render() {
        const { localizor } = this.props;
        const WhatAreInfo = localizor.strings.info.whatAre.content;
        return <WhatAreInfo />;
    }
}

export default withLanguageContext(WhatAre);
