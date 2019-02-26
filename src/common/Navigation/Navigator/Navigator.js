import PropTypes from "prop-types";
import queryString from "query-string";
import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Routes from "../../../modules/config/routes";
import { Localize } from "../../../modules/config/strings";

class Navigator extends Component {
    generateRoutes() {
        const { history } = this.props;
        const params = queryString.parse(history.location.search);
        if (params.lang) {
            Localize.setLanguage(params.lang);
        }
        return Object.keys(Routes).map((routeName, idx) => {
            const { component: Component, path, exact } = Routes[routeName];

            const currentComponent = props => <Component {...props} />;

            const routeProps = {
                path: path,
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
