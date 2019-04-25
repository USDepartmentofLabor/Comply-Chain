import React, { Component } from "react";
import styled from "styled-components";
import { isBrowser, isIOS } from "../../modules/utils/platform";

const Scrollbar = styled.div`
    div::-webkit-scrollbar {
        width: 5px;
        display: ${props => (!props.visible ? "none" : "undefined")};
        background: transparent;
    }

    div::-webkit-scrollbar-track {
        border-radius: 10px;
    }

    div::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: rgb(169, 169, 169);
    }
`;

const SCROLL_TIMEOUT = 75;

class MobileScrollbar extends Component {
    state = { visible: false };
    componentDidMount() {
        document
            .getElementById("main")
            .addEventListener("scroll", this.displayScrollbar);
        this.scrollTimeout = setTimeout(this.hideScrollbar, SCROLL_TIMEOUT);
    }

    componentWillUnmount() {
        document
            .getElementById("main")
            .removeEventListener("scroll", this.displayScrollbar);
    }

    displayScrollbar = e => {
        const { visible } = this.state;
        clearTimeout(this.scrollTimeout);
        if(!visible) {
            this.setState({ visible: true });
        }
        this.scrollTimeout = setTimeout(this.hideScrollbar, SCROLL_TIMEOUT);
    };

    hideScrollbar = () => {
        this.setState({ visible: false });
    };
    render() {
        const { children } = this.props;
        const { visible } = this.state;
        if (isBrowser()) {
            return children;
        }
        return <Scrollbar visible={visible}>{children}</Scrollbar>;
    }
}

export default MobileScrollbar;
