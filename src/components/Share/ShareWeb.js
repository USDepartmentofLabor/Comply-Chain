import PropTypes from "prop-types";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withLanguageContext } from "../Language";
import { getPageTitle } from "./ShareUtils";

class ShareWeb extends Component {
    handleShare = () => {
        const { location, match, localizor } = this.props;
        let title = getPageTitle(location, match, localizor) || "Comply Chain";

        // TODO impl web share logic
        console.log(title);
    };

    render() {
        const { id, className, children } = this.props;
        return (
            <div
                id={id}
                className={className}
                children={children}
                onClick={this.handleShare}
            />
        );
    }
}

ShareWeb.propTypes = {
    localizor: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    children: PropTypes.node
};
export default withLanguageContext(withRouter(ShareWeb));
