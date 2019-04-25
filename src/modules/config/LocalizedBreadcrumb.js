import React, { Component } from "react";
import { withLanguageContext } from "../../components/Language";
import { getPropByString } from "../utils";

class LocalizedBreadcrumb extends Component {
    render() {
        const { string, localizor, extra } = this.props;

        return (
            <span>
                {getPropByString(localizor.strings, string)}
                {extra && " "}
                {extra}
            </span>
        );
    }
}

export default withLanguageContext(LocalizedBreadcrumb);
