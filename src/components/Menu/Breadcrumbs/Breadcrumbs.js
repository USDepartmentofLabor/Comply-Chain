import PropTypes from "prop-types";
import React, { Component } from "react";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breadcrumbs } from "../../../modules/config/breadcrumbs";
import Icons from "../../Icons";
import { theme } from "../../../modules/config/theme";
import Routes from "../../../modules/config/routes";

const Breadcrumb = styled.span``;

Breadcrumb.Section = styled.span`
    font-size: 18px;
    color: #0275d8;
    text-decoration: none;
    margin-left: 5px;

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

const StyledLink = styled(NavLink)`
    color: ${theme.colors.base};
    font-weight: bold;
    &:hover {
        text-decoration: none;
    }
`;
const Icon = styled.span`
    vertical-align: middle;
    color: ${theme.colors.primaryAltDarkest};
    font-size: 1.25em;
`;

class Breadcrumbs extends Component {
    render() {
        const { breadcrumbs, id } = this.props;
        return (
            <Breadcrumb id={id}>
                {breadcrumbs.map(breadcrumb => {
                    // don't display breadcrumb for the current page
                    if (
                        breadcrumb.props.location.pathname ===
                        breadcrumb.props.match.url
                    ) {
                        if (
                            breadcrumb.props.location.pathname ===
                            Routes.Home.path
                        ) {
                            return (
                                <Breadcrumb.Section
                                    key="home_comply_chain"
                                    as={StyledLink}
                                    to={breadcrumb.props.match.url}
                                >
                                    Comply Chain
                                </Breadcrumb.Section>
                            );
                        }
                        return null;
                    }
                    return (
                        <span key={breadcrumb.key}>
                            <Breadcrumb.Section
                                as={StyledLink}
                                to={breadcrumb.props.match.url}
                            >
                                <Icon>
                                    <Icons.ArrowDropLeft />
                                </Icon>
                                {breadcrumb}
                            </Breadcrumb.Section>
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

export default withBreadcrumbs(breadcrumbs, { disableDefaults: true })(
    Breadcrumbs
);
