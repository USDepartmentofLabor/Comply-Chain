import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';
import 'core-js';
import 'react-app-polyfill/ie11';
import 'core-js/features/array/includes';
import 'core-js/features/array/find-index';
import 'core-js/features/string/includes';
import 'core-js/es/object';
import smoothscroll from "smoothscroll-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { whitelist } from "./modules/config/whitelist";
import { isAndroid, inAppBrowserOptions, inAppBrowserOptions1 } from "./modules/utils/platform";

smoothscroll.polyfill();

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
                     const browserOptions = inAppBrowserOptions();
                     const browserOptions1 = inAppBrowserOptions1();
                    // // const browserOptions2 = inAppBrowserOptions2();
                    // // window.open(link, "_blank", browserOptions2);
                    if (window.cordova.platformId === "ios") {
                        window.open(link, "_blank", browserOptions);
                        window.open(link, "_blank", browserOptions1);
                    }else{
                        window.open(link, "_system");
                    }
            
                    
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
