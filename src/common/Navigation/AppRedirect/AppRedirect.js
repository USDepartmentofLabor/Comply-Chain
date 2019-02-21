import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { withPathGenerator } from "../Navigation";

class AppRedirect extends Component {
    render() {
        const { to, path } = this.props;
        const newPath = path.generate(to);
        return <Redirect to={newPath} />;
    }
}

AppRedirect.propTypes = {
    to: PropTypes.string.isRequired,
    path: PropTypes.object.isRequired
};

export default withPathGenerator(AppRedirect);
