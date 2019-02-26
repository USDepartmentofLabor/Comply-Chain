import React, { Component } from "react";
import { matchPath } from "react-router";
import { strings } from "../../modules/config/strings";

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
                if (strings.getAvailableLanguages().includes(lang)) {
                    strings.setLanguage(match.params.lang);
                    localStorage.setItem("lang", match.params.lang);
                    langPath = "/" + lang + currentPath;
                }
            }
            if (!langPath) {
                langPath = "/" + strings.getLanguage() + currentPath;
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
                if (strings.getAvailableLanguages().includes(lang)) {
                    strings.setLanguage(match.params.lang);
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
