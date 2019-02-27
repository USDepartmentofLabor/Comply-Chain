import React, { Component } from "react";
import { matchPath } from "react-router";
import { withLanguageContext } from "../Language";

const withPathGenerator = WrappedComponent => {
    class Path extends Component {
        generatePath = path => {
            const { localizor } = this.props;
            let currentPath = path;
            let match = matchPath(currentPath, {
                path: "/:lang"
            });
            const lang = match && match.params && match.params.lang;
            let langPath;
            if (lang) {
                if (localizor.availableLanguages.includes(lang)) {
                    localizor.setLanguage(match.params.lang);
                    langPath = "/" + lang + currentPath;
                }
            }
            if (!langPath) {
                langPath = "/" + localizor.language + currentPath;
            }

            return langPath;
        };

        isValidPath = path => {
            const { localizor } = this.props;
            let currentPath = path;
            let match = matchPath(currentPath, {
                path: "/:lang"
            });
            const lang = match && match.params && match.params.lang;
            let langPath;

            if (lang) {
                if (localizor.availableLanguages.includes(lang)) {
                    localizor.setLanguage(match.params.lang);
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

    return withLanguageContext(Path);
};

export { withPathGenerator };
