import PropTypes from "prop-types";
import React, { Component } from "react";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";
import { breadcrumbs } from "../../../modules/config/breadcrumbs";
import Routes from "../../../modules/config/routes";
import { theme } from "../../../modules/config/theme";
import { isIOS } from "../../../modules/utils/platform";
import Icons from "../../Icons";

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
    state = { backUrl: undefined };

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            const { pathname } = prevProps.location;
            const exclude = [
                Routes.Search.path,
                Routes.Bookmarks.path,
                Routes.Home.path
            ];
            let backUrl = undefined;
            if (!exclude.includes(pathname)) {
                backUrl = pathname;
            } else if (pathname === Routes.Home.path) {
                backUrl = undefined;
            } else {
                backUrl = this.state.backUrl;
            }
            this.setState({ backUrl });
        }
    }

    displayBreadcrumb = breadcrumbs => {
        const { location } = this.props;
        const { backUrl } = this.state;

        for (let i = 0; i < breadcrumbs.length; i++) {
            const breadcrumb = breadcrumbs[i];
            if (
                breadcrumb.props.location.pathname ===
                breadcrumb.props.match.url
            ) {
                if (breadcrumb.props.location.pathname === Routes.Home.path) {
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
            } else if (
                isIOS() &&
                breadcrumb.props.location.search &&
                breadcrumb.props.location.search.includes("search=")
            ) {
                return (
                    <Breadcrumb.Section
                        key="search_comply_chain"
                        as={StyledLink}
                        to={Routes.Search.path}
                    >
                        <Icon>
                            <Icons.ArrowDropLeft />
                        </Icon>
                        Search Results
                    </Breadcrumb.Section>
                );
            } else if (
                isIOS() &&
                (location.pathname === Routes.Bookmarks.path ||
                    location.pathname === Routes.Search.path) &&
                backUrl
            ) {
                return (
                    <Breadcrumb.Section
                        key="back_to_prev"
                        as={StyledLink}
                        to={backUrl}
                    >
                        <Icon>
                            <Icons.ArrowDropLeft />
                        </Icon>
                        Back
                    </Breadcrumb.Section>
                );
            } else {
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
            }
        }
    };

    render() {
        const { breadcrumbs, id } = this.props;
        return (
            <Breadcrumb id={id}>
                {this.displayBreadcrumb(breadcrumbs.slice(-2).reverse())}
            </Breadcrumb>
        );
    }
}

Breadcrumbs.propTypes = {
    id: PropTypes.string,
    breadcrumbs: PropTypes.array.isRequired,
    className: PropTypes.string,
    location: PropTypes.object.isRequired
};

export default withRouter(
    withBreadcrumbs(breadcrumbs, { disableDefaults: true })(Breadcrumbs)
);
