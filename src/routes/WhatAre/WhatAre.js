import PropTypes from "prop-types";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Bookmarkable from "../../components/Bookmarkable";
import { withLanguageContext } from "../../components/Language";
class WhatAre extends Component {
    render() {
        const { localizor, pdf, location } = this.props;
        const WhatAreInfo = localizor.strings.info.whatAre.content;
        return (
            <Bookmarkable
                titleString="info.whatAre.title"
                url={location.pathname}
                pdf={pdf}
            >
                <WhatAreInfo pdf={pdf} />
            </Bookmarkable>
        );
    }
}
WhatAre.propTypes = {
    localizor: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    pdf: PropTypes.bool
};

export default withRouter(withLanguageContext(WhatAre));
