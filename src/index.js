import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { whitelist } from "./modules/config/whitelist";
import { isAndroid } from "./modules/utils/platform";

const CordovaApp = (
    <HashRouter>
        <App />
    </HashRouter>
);
const BrowserApp = (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
    </BrowserRouter>
);

const initApp = app => {
    ReactDOM.render(app, document.getElementById("root"));
    serviceWorker.register();
};

const addInAppBrowser = () => {
    window.open = window.cordova.InAppBrowser.open;
    // prevent's external links from opening in external browser and opens in cordova's InAppBrowser instead.
    document.onclick = function(e) {
        e = e || window.event;
        const element = e.target || e.srcElement;

        if (element.tagName === "A") {
            const link = element.href;
            const pattern = /^((http|https):\/\/)/;
            const pdf = /(\.pdf(\?|$))/; // InAppBrowser doesn't support displaying PDF's so we let the system open them.
            if (pattern.test(link) && !pdf.test(link)) {
                if (isAndroid() && whitelist.includes(link)) {
                    window.open(link, "_system");
                } else {
                    window.open(link, "_blank");
                }
                return false;
            }
        }
        return true;
    };
};

if (window.cordova) {
    document.addEventListener(
        "deviceready",
        () => {
            addInAppBrowser();
            initApp(CordovaApp);
        },
        false
    );
} else {
    initApp(BrowserApp);
}
