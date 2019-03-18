import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../../../modules/config/theme";

const Wrapper = styled.div`
    & ol {
        list-style: none;
        counter-reset: li;
    }
    & li {
        counter-increment: li;
        &::before {
            content: counter(li) ".";
            color: ${theme.colors.primary};
            font-weight: bold;
            width: 1em;
            margin-left: -1em;
            margin-right: 0.5em;
            text-align: right;
            direction: rtl;
        }
        & a {
            text-decoration: none;
            color: ${theme.colors.primary};
        }
    }
`;

class FurtherResources extends Component {
    render() {
        return <Wrapper>{this.props.children}</Wrapper>;
    }
}

FurtherResources.propTypes = {
    children: PropTypes.node.isRequired
};

export default FurtherResources;
