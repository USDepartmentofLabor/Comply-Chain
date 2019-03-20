import React, { Component } from "react";
import { withLanguageContext } from "../../components/Language";

class LocalizedBreadcrumb extends Component {
    getPropByString = (obj, propString) => {
        if (!propString) return obj;

        let prop;
        let props = propString.split(".");

        for (var i = 0, iLen = props.length - 1; i < iLen; i++) {
            prop = props[i];

            let candidate = obj[prop];
            if (candidate !== undefined) {
                obj = candidate;
            } else {
                break;
            }
        }
        return obj[props[i]];
    };
    render() {
        const { string, localizor, extra } = this.props;

        return (
            <span>
                {this.getPropByString(localizor.strings, string)}
                {extra}
            </span>
        );
    }
}

export default withLanguageContext(LocalizedBreadcrumb);
