import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
    background-color: #f2f2f2;
    padding-top: 2px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

class ExampleInAction extends Component {
    render() {
        const { children } = this.props;
        return <Wrapper>{children}</Wrapper>;
    }
}

ExampleInAction.propTypes = {
    children: PropTypes.node
};

export default ExampleInAction;
