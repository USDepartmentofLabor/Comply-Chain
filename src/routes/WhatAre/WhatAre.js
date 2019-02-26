import React, { Component } from "react";
import { Localize } from "../../modules/config/strings";

class WhatAre extends Component {
    render() {
        const WhatAreInfo = Localize.getStrings().info.whatAre;
        return <WhatAreInfo />;
    }
}

export default WhatAre;
