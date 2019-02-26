import React, { Component } from "react";
import { matchPath } from "react-router";
import { Localize } from "../../modules/config/strings";

const withPathGenerator = WrappedComponent => {
    class Path extends Component {
        generatePath = path => {
            let currentPath = path;
            let match = matchPath(currentPath, {
                path: "/:lang"
            });
            const lang = match && match.params && match.params.lang;
            let langPath;
            if (lang) {
                if (Localize.getAvailableLanguages().includes(lang)) {
                    Localize.setLanguage(match.params.lang);
                    langPath = "/" + lang + currentPath;
                }
            }
            if (!langPath) {
                langPath = "/" + Localize.getLanguage() + currentPath;
            }

            return langPath;
        };

        isValidPath = path => {
            let currentPath = path;
            let match = matchPath(currentPath, {
                path: "/:lang"
            });
            const lang = match && match.params && match.params.lang;
            let langPath;

            if (lang) {
                if (Localize.getAvailableLanguages().includes(lang)) {
                    Localize.setLanguage(match.params.lang);
                    langPath = "/" + lang + currentPath;
                }
            }

            if (!langPath) {
                return false;
            }
            return true;
        };

        render() {
            const path = {
                generate: to => {
                    return this.generatePath(to);
                },
                isValid: to => {
                    return this.isValidPath;
                }
            };
            return <WrappedComponent {...this.props} path={path} />;
        }
    }

    return Path;
};

export { withPathGenerator };
