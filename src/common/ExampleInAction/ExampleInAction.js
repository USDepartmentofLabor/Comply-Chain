import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { MdLightbulbOutline as Icon } from "react-icons/md";

const Wrapper = styled.div`
    background-color: #f2f2f2;
    padding-top: 2px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    h2,
    h3 {
        color: #00008b;
    }
`;

class ExampleInAction extends Component {
    render() {
        const { children } = this.props;
        return <Wrapper>{children}</Wrapper>;
    }
}

ExampleInAction.Icon = styled(Icon)`
    vertical-align: middle;
`;
ExampleInAction.propTypes = {
    children: PropTypes.node
};

export default ExampleInAction;
