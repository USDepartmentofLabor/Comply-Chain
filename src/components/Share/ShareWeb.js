import copy from "copy-to-clipboard";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Dropdown from "../Dropdown";
import { withLanguageContext } from "../Language";
import { PocketButton } from "../Social";
import { getPageTitle } from "./ShareUtils";

class ShareWeb extends Component {
    handleEmail = () => {
        const { location, localizor } = this.props;
        let title = getPageTitle(location, localizor) || "Comply Chain";
        window.open(
            `mailto:?subject=${title}&body=U.S. Department of Labor’s International Labor Affairs Bureau’s Comply Chain Website: ${
                window.location.href
            }`
        );
    };

    handleCopy = () => {
        copy(window.location.href);
    };

    render() {
        const { id, className, children, localizor } = this.props;
        return (
            <div tabIndex="0">
            <Dropdown up id={id} className={className}>
                <Dropdown.Title>{children}</Dropdown.Title>
                <Dropdown.Content>
                    <Dropdown.Item>
                        <PocketButton lang="en" count="horizontal" />
                    </Dropdown.Item>
                    <Dropdown.Item onClick={this.handleEmail}>
                        Email
                    </Dropdown.Item>
                    <Dropdown.Item onClick={this.handleCopy}>
                        {localizor.strings.general.copyLink}
                    </Dropdown.Item>
                </Dropdown.Content>
            </Dropdown>
            </div>
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
