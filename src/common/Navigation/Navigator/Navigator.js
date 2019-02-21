import PropTypes from "prop-types";
import React, { Component } from "react";
import { matchPath } from "react-router";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Routes from "../../../modules/config/routes";
import { strings } from "../../../modules/config/strings";

class Navigator extends Component {
    generateRoutes() {
        const { history } = this.props;
        const match = matchPath(history.location.pathname, {
            path: "/:lang"
        });
        const lang = match && match.params && match.params.lang;
        let langPath;
        if (lang) {
            if (strings.getAvailableLanguages().includes(lang)) {
                strings.setLanguage(match.params.lang);
                langPath = "/" + lang;
            }
        }
        if (!langPath) {
            langPath = "/" + strings.getLanguage() + history.location.pathname;
            return <Redirect to={langPath} />;
        }
        return Object.keys(Routes).map((routeName, idx) => {
            const { component: Component, path, exact } = Routes[routeName];

            const currentComponent = props => <Component {...props} />;

            const routeProps = {
                path: langPath + path,
                component: currentComponent,
                key: idx,
                exact
            };

            return <Route {...routeProps} />;
        });
    }

    render() {
        return (
            <Switch>
                {this.generateRoutes()}
                <Route component={() => <div>404 Not Found</div>} />
            </Switch>
        );
    }
}

Navigator.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default withRouter(Navigator);
