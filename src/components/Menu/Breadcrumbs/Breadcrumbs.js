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
import { withLanguageContext } from "../../Language";

const Breadcrumb = styled.span``;

Breadcrumb.Section = styled.span`
    font-size: 18px;
    color: #0275d8;
    text-decoration: none;
    margin: 30px 0px 50px 5px;

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

const h1style = {
      padding: "5px",
      fontFamily: "Source Sans Pro",
      margin: "-30px 0px 0px 5px"
    };

class Breadcrumbs extends Component {
    displayBreadcrumb = breadcrumbs => {
        const { location, backUrl, localizor } = this.props;

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
                            <h1 style={h1style}>Comply Chain</h1>
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
                        {localizor.strings.general.searchResults}
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
                            <Icons.ArrowDropLeft alt="Back Arrow" />
                        </Icon>
                        {localizor.strings.general.back}
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
                                <Icons.ArrowDropLeft alt="Back Arrow" />
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
    location: PropTypes.object.isRequired,
    backUrl: PropTypes.string,
    localizor: PropTypes.object.isRequired
};

export default withRouter(
    withLanguageContext(
        withBreadcrumbs(breadcrumbs, { disableDefaults: true })(Breadcrumbs)
    )
);
