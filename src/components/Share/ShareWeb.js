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



//const Wrapper = styled.div`
//    float: left;
//    overflow: hidden;
//`;

    handleKeyDown = (e) => {
        if (window.PointerEvent) {
            console.log('POINTER DEVICE EVENT');
        }
        if (e.keyCode === 13) {
                    console.log('ENTER KEY PRESSED');
                }

        };



    myDiv = React.createRef();
    render() {
        const { id, className, children, localizor } = this.props;
        return (
           <div tabIndex="0" aria-label="Share">
            <Dropdown up id={id} className={className} onKeyDown={this.handleTapOrClick}>
            <Dropdown.Title >{children}</Dropdown.Title>
                <Dropdown.Content>
                <div><Dropdown.Item>
                        <button><PocketButton role="button" lang="en" count="horizontal" /></button>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={this.handleEmail}>
                       <button>
                       Email
                       </button>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={this.handleCopy}>
                       <button>
                       {localizor.strings.general.copyLink}
                       </button>
                    </Dropdown.Item>
               </div> </Dropdown.Content>
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
    children: PropTypes.node.isRequired,

};
export default withLanguageContext(withRouter(ShareWeb));
