import PropTypes from "prop-types";
import React, { Component } from "react";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breadcrumbs } from "../../../modules/config/breadcrumbs";

const Breadcrumb = styled.ul`
    padding: 10px 16px;
    list-style: none;
`;

Breadcrumb.Section = styled.li`
    display: inline;
    font-size: 18px;
    color: #0275d8;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

Breadcrumb.Divider = styled.span`
    padding: 8px;
    color: black;

    &:before {
        content: "/\00a0";
    }
`;

class Breadcrumbs extends Component {
    render() {
        const { breadcrumbs, id } = this.props;
        return (
            <Breadcrumb id={id}>
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
                                <Breadcrumb.Divider />
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
