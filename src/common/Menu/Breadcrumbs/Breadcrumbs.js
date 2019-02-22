import PropTypes from "prop-types";
import React, { Component } from "react";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { NavLink } from "react-router-dom";
import { Breadcrumb } from "semantic-ui-react";
import { breadcrumbs } from "../../../modules/config/breadcrumbs";

class Breadcrumbs extends Component {
    render() {
        const { breadcrumbs, className, id } = this.props;
        return (
            <Breadcrumb id={id} className={className}>
                {breadcrumbs.map((breadcrumb, index) => {
                    return (
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
                    );
                })}
            </Breadcrumb>
        );
    }
}

Breadcrumbs.propTypes = {
    id: PropTypes.string,
    breadcrumbs: PropTypes.array.isRequired,
    className: PropTypes.string
};

export default withBreadcrumbs(breadcrumbs)(Breadcrumbs);
