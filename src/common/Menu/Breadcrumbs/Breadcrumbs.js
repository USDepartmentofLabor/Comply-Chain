import React, { Component } from "react";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Breadcrumb } from "semantic-ui-react";

class Breadcrumbs extends Component {
    render() {
        const { breadcrumbs, className, id } = this.props;
        return (
            <Breadcrumb id={id} className={className}>
                {breadcrumbs.map((breadcrumb, index) => (
                    <span key={breadcrumb.key}>
                        <Breadcrumb.Section
                            as={NavLink}
                            to={breadcrumb.props.match.url}
                        >
                            {breadcrumb}
                        </Breadcrumb.Section>
                        {index < breadcrumbs.length - 1 && (
                            <Breadcrumb.Divider icon="right angle" />
                        )}
                    </span>
                ))}
            </Breadcrumb>
        );
    }
}

Breadcrumbs.propTypes = {
    id: PropTypes.string,
    breadcrumbs: PropTypes.array.isRequired,
    className: PropTypes.string
};

export default withBreadcrumbs()(Breadcrumbs);
