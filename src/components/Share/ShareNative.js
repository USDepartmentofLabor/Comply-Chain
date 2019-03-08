import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { webUrl } from "../../modules/config/constants";
import { withLanguageContext } from "../Language";
import { getPageTitle } from "./ShareUtils";

class ShareNative extends Component {
    displayActionSheet = () => {
        const options = {
            title: "What would you like to do?",
            buttonLabels: ["Share to...", "Copy Link", "Create PDF"],
            androidEnableCancelButton: true, // default false
            winphoneEnableCancelButton: true, // default false
            addCancelButtonWithLabel: "Cancel",
            position: [20, 40] // for iPad pass in the [x, y] position of the popover
        };
        window.plugins.actionsheet.show(options, this.handleAction);
    };

    handleAction = buttonIdx => {
        // buttonIdx is 1-based. First button is 1.
        const { location } = this.props;

        switch (buttonIdx) {
            case 1:
                this.handleShare();
                break;
            case 2:
                window.cordova.plugins.clipboard.copy(
                    `${webUrl}${location.pathname}`,
                    this.onCopySuccess,
                    this.onCopyError
                );
                break;
            case 3:
                this.generatePDF();
                break;
            default:
                console.log("user cancelled");
                break;
        }
    };

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
            this.onShareSuccess,
            this.onShareError
        );
    };

    onShareSuccess = result => {};

    onShareError = msg => {
        console.log("Sharing failed with message: " + msg);
    };

    onCopySuccess = () => {
        window.plugins.toast.showWithOptions({
            message: "Copied to clipboard.",
            duration: "short",
            position: "bottom"
        });
    };

    onCopyError = () => {
        window.plugins.toast.showWithOptions({
            message: "Unable to copy to clipboard.",
            duration: "short",
            position: "bottom"
        });
    };

    generatePDF = () => {
        console.log("generate PDF");
    };

    render() {
        const { id, className, children } = this.props;
        return (
            <div
                id={id}
                className={className}
                children={children}
                onClick={this.displayActionSheet}
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
