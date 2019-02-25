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
            initApp(CordovaApp);
        },
        false
    );
} else {
    initApp(BrowserApp);
}
