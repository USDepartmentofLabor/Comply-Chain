import PropTypes from "prop-types";
import queryString from "query-string";
import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Routes from "../../../modules/config/routes";
import { withLanguageContext } from "../../Language";

class Navigator extends Component {
    generateRoutes() {
        const { history, localizor } = this.props;
        const params = queryString.parse(history.location.search);
        if (params.lang) {
            localizor.setLanguage(params.lang);
        }
        return Object.keys(Routes).map((routeName, idx) => {
            const { component: Component, path, exact } = Routes[routeName];

            const routeProps = {
                path: path,
                component: Component,
                key: routeName,
                localizor,
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
    location: PropTypes.object.isRequired,
    localizor: PropTypes.object.isRequired
};

export default withRouter(withLanguageContext(Navigator));
