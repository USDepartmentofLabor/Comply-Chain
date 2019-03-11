import React, { Component } from "react";
import { withLanguageContext } from "../../components/Language";
import PropTypes from "prop-types";
class WhatAre extends Component {
    render() {
        const { localizor, pdf } = this.props;
        const WhatAreInfo = localizor.strings.info.whatAre.content;
        return <WhatAreInfo pdf={pdf} />;
    }
}
WhatAre.propTypes = {
    localizor: PropTypes.object.isRequired,
    pdf: PropTypes.bool
};

export default withLanguageContext(WhatAre);
