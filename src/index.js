import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const CordovaApp = (
    <HashRouter>
        <App />
    </HashRouter>
);
const BrowserApp = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

const initApp = app => {
    ReactDOM.render(app, document.getElementById("root"));
    serviceWorker.register();
};

if (window.cordova) {
    document.addEventListener(
        "deviceready",
        () => {
            window.open = window.cordova.InAppBrowser.open;

            document.onclick = function(e) {
                e = e || window.event;
                const element = e.target || e.srcElement;

                if (element.tagName === "A") {
                    const link = element.href;
                    const pattern = /^((http|https):\/\/)/;
                    if (pattern.test(link)) {
                        window.open(link, "_blank");
                        return false;
                    }
                }
                return true;
            };

            initApp(CordovaApp);
        },
        false
    );
} else {
    initApp(BrowserApp);
}
