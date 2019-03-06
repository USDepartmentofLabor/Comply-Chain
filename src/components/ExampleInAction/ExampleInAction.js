import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import Icons from "../Icons";

const Wrapper = styled.div`
    background-color: #f2f2f2;
    padding-top: 2px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    h2,
    h3,
    h4 {
        color: #00008b;
    }
`;

class ExampleInAction extends Component {
    render() {
        const { children, id } = this.props;
        return <Wrapper id={id}>{children}</Wrapper>;
    }
}

ExampleInAction.Icon = styled(Icons.Lightbulb)`
    vertical-align: middle;
`;
ExampleInAction.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node
};

export default ExampleInAction;
