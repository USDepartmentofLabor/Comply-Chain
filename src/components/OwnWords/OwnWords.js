import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import Icons from "../Icons";
import { theme } from "../../modules/config/theme";

const Wrapper = styled.div`
    background-color: #f2f2f2;
    padding-top: 17px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    h1,
    h2,
    h3,
    h4 {
        color: ${theme.colors.darkOrange};
        margin-top: 0;
    }

    ol,
    ul {
        h1,
        h2,
        h3,
        h4 {
            font-family: ${theme.fonts.body};
            color: ${theme.colors.base};
        }
    }
`;

class OwnWords extends Component {
    render() {
        const { children } = this.props;
        return <Wrapper>{children}</Wrapper>;
    }
}

OwnWords.Icon = styled(Icons.Feedback)`
    vertical-align: middle;
`;

OwnWords.propTypes = {
    children: PropTypes.node
};

export default OwnWords;
