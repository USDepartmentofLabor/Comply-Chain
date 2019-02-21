import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withPathGenerator } from "../Navigation";

class AppLink extends Component {
    render() {
        const { to, children, className, path } = this.props;
        const newPath = path.generate(to);
        return (
            <Link className={className} to={newPath}>
                {children}
            </Link>
        );
    }
}

AppLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    path: PropTypes.object.isRequired
};

export default withPathGenerator(AppLink);
