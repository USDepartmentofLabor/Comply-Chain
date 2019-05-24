import React, { Component } from "react";
import { isAndroid, isIOS } from "../../modules/utils/platform";
class SweatAndToilLink extends Component {
    render() {
        let link = "https://www.dol.gov/general/apps/ilab";

        if (isAndroid()) {
            link =
                "https://play.google.com/store/apps/details?id=gov.dol.childlabor&hl=en";
        } else if (isIOS()) {
            link =
                "https://itunes.apple.com/us/app/sweat-toil-child-labor-forced/id1018240593?ls=1&mt=8";
        }
        return (
            <a target="_blank" rel="noopener noreferrer" href={link}>
                Sweat &amp; Toil
            </a>
        );
    }
}

export default SweatAndToilLink;
