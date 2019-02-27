import React, { Component } from "react";
import { withLanguageContext } from "../../common/Language";
import PropTypes from "prop-types";
class WhatAre extends Component {
    render() {
        const { localizor } = this.props;
        const WhatAreInfo = localizor.strings.info.whatAre.content;
        return <WhatAreInfo />;
    }
}
WhatAre.propTypes = {
    localizor: PropTypes.object.isRequired
};

export default withLanguageContext(WhatAre);
