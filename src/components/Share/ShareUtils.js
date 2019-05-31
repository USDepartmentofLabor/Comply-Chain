import React from "react";
import { renderToString } from "react-dom/server";
import { matchPath } from "react-router";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS as scSecrets } from "styled-components";
import Routes from "../../modules/config/routes";
import { isBrowser, isIOS } from "../../modules/utils/platform";
import { LanguageProvider } from "../Language";
import StyleSheetManager from "./StyleSheetManager";
import { iosCSS } from "./ios-css";

const { StyleSheet } = scSecrets;

export const getPageTitle = (location, localizor) => {
    let title = undefined;
    const match =
        matchPath(location.pathname, {
            path: Routes.Topic.path,
            strict: false
        }) ||
        matchPath(location.pathname, {
            path: Routes.Step.path,
            strict: false
        }); // check topic and step paths

    if (match) {
        const step = match.params.step && match.params.step - 1;
        const topic = match.params.topic && match.params.topic - 1;
        if (step >= 0) {
            title = localizor.strings.steps[step].title;
            if (topic >= 0) {
                title =
                    title +
                    " | " +
                    localizor.strings.steps[step].topics[topic].title;
            }
        }
    } else {
        // if not a topic or step page then must be an info page

        // grab the route and convert it to an object key in order to grab the title from the localized data
        const route = location.pathname
            .split("/")[1]
            .toLowerCase()
            .split("-")
            .map((split, i) => {
                if (i > 0) {
                    return split.charAt(0).toUpperCase() + split.slice(1);
                }
                return split;
            })
            .join("");

        title =
            (localizor.strings.info[route] &&
                localizor.strings.info[route].title) ||
            undefined;
    }

    return title;
};

const collectStyles = children => {
    return (
        <StyleSheetManager sheet={StyleSheet.master}>
            {children}
        </StyleSheetManager>
    );
};

export const getPageHtml = location => {
    const mountComponent = component => {
        let Router = isBrowser() ? BrowserRouter : HashRouter;

        return collectStyles(
            <Router>
                <LanguageProvider>{component}</LanguageProvider>
            </Router>
        );
    };
    const match =
        matchPath(location.pathname, {
            path: Routes.Topic.path,
            strict: false
        }) ||
        matchPath(location.pathname, {
            path: Routes.Step.path,
            strict: false
        }); // check topic and step paths

    if (match) {
        const step = match.params.step && match.params.step - 1;
        const topic = match.params.topic && match.params.topic - 1;
        if (step >= 0) {
            let Component = Routes.Step.component;
            if (topic >= 0) {
                Component = Routes.Topic.component;
            }
            let html = renderToString(
                mountComponent(<Component pdf={true} match={match} />)
            );
            html = StyleSheet.master.toHTML().concat(html);
            if (isIOS()) {
                html = iosCSS.concat(html);
            }
            return html;
        }
    } else {
        // if not a topic or step page then must be an info page
        // grab the route and convert it to an object key in order to grab the component from the route config.
        const route =
            location.pathname === "/"
                ? "Home"
                : location.pathname
                      .split("/")[1]
                      .toLowerCase()
                      .split("-")
                      .map(split => {
                          return split.charAt(0).toUpperCase() + split.slice(1);
                      })
                      .join("");
        const Component =
            (Routes[route] && Routes[route].component) || undefined;

        let html =
            Component &&
            renderToString(mountComponent(<Component pdf={true} />));
        html = StyleSheet.master.toHTML().concat(html);
        if (isIOS()) {
            html = iosCSS.concat(html);
        }
        return html;
    }

    return undefined;
};
