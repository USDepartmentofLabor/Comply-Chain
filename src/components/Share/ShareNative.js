import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { webUrl } from "../../modules/config/constants";
import { withLanguageContext } from "../Language";
import { getPageTitle, getPageHtml } from "./ShareUtils";

class ShareNative extends Component {
    displayActionSheet = () => {
        const options = {
            title: "What would you like to do?",
            buttonLabels: ["Share to...", "Copy Link", "Create PDF"],
            androidEnableCancelButton: true,
            winphoneEnableCancelButton: true,
            addCancelButtonWithLabel: "Cancel"
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
                this.generatePDF(location);
                break;
            default:
                window.plugins.toast.showWithOptions({
                    message: "Action canceled.",
                    duration: "short",
                    position: "bottom"
                });
                break;
        }
    };

    handleShare = () => {
        const { location, localizor } = this.props;
        let title = getPageTitle(location, localizor) || "Comply Chain";

        const options = {
            message: title,
            subject: title,
            url: `${webUrl}${location.pathname}`,
            chooserTitle: "Share via"
        };

        window.plugins.socialsharing.shareWithOptions(
            options,
            this.onShareSuccess,
            this.onShareError
        );
    };

    onShareSuccess = result => {};

    onShareError = msg => {
        window.plugins.toast.showWithOptions({
            message: "An error occurred when attempting to share.",
            duration: "short",
            position: "bottom"
        });
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

    generatePDF = location => {
        const data = getPageHtml(location);
        const options = {
            documentSize: "A4",
            type: "share",
            fileName: "complychain.pdf"
        };
        window.cordova.plugins.pdf
            .fromData(data, options)
            .then(this.onPDFSuccess)
            .catch(this.onPDFError);
    };

    onPDFSuccess = () => {
        window.plugins.toast.showWithOptions({
            message: "PDF generated successfully.",
            duration: "short",
            position: "bottom"
        });
    };

    onPDFError = e => {
        window.plugins.toast.showWithOptions({
            message: "Unable to generate PDF.",
            duration: "short",
            position: "bottom"
        });
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
