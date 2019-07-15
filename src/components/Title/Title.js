import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

class Title extends Component {
    render() {
        const { title } = this.props;
        return (
            <Helmet>
                <title>{title}</title>
            </Helmet>
        );
    }
}

Title.propTypes = {
    title: PropTypes.string.isRequired
};
export default Title;
