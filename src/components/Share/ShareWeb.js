import copy from "copy-to-clipboard";
import PropTypes from "prop-types";
import React, { Component, node } from "react";
import { withRouter } from "react-router-dom";
import Dropdown from "../Dropdown";
import { withLanguageContext } from "../Language";
import { PocketButton } from "../Social";
import { getPageTitle } from "./ShareUtils";
import styled from "styled-components";


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

    handlePocketButton = () => {
        this.setState({ isClicked: true });
      };
    componentWillMount() {
        document.addEventListener("keydown", this.handleKeyPress, false);
        }

     componentWillUnmount() {
         document.removeEventListener("keydown", this.handleKeyPress, false);
         }

     handleKeyPress = e => {
           if ((e.keyCode === 13)&&(e.target.ariaLabel==="Pocket")) {
                   window.open("https://widgets.getpocket.com/v1/popup?url=http%3A%2F%2Flocalhost%3A3000%2F");
            }
          if ((e.keyCode === 13)&&(e.target.ariaLabel==="Copy")) {
                      this.handleCopy();
           }
         if ((e.keyCode === 13)&&(e.target.ariaLabel==="Email")) {
                     this.handleEmail();
          } else {
                    return;
          }
     };

    render() {
        const { id, className, children, localizor } = this.props;
        return (
           <div tabIndex="0" aria-label="Share">
            <Dropdown up id={id} className={className}>
            <Dropdown.Title >{children}</Dropdown.Title>
                <Dropdown.Content>
                <Dropdown.Item>
                     <button type="button" aria-label="Pocket"><PocketButton lang="en" count="horizontal" /></button>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={this.handleCopy}>
                       <button aria-label="Copy">
                       {localizor.strings.general.copyLink}
                       </button>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={this.handleEmail}>
                   <button aria-label="Email">
                   Email
                   </button>
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
