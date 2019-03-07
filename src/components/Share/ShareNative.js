import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { webUrl } from "../../modules/config/constants";
import { withLanguageContext } from "../Language";
import { getPageTitle } from "./ShareUtils";

class ShareNative extends Component {
    handleShare = () => {
        const { location, localizor } = this.props;
        let title = getPageTitle(location, localizor) || "Comply Chain";

        console.log(title);
        const options = {
            message: title,
            subject: title,
            url: `${webUrl}${location.pathname}`,
            chooserTitle: "Pick an app"
        };

        window.plugins.socialsharing.shareWithOptions(
            options,
            this.onSuccess,
            this.onError
        );
    };

    onSuccess = result => {
        console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
        console.log("Shared to app: " + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
    };

    onError = msg => {
        console.log("Sharing failed with message: " + msg);
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

ShareNative.propTypes = {
    localizor: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    children: PropTypes.node
};
export default withLanguageContext(withRouter(ShareNative));
