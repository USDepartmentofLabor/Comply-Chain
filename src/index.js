import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter } from "react-router-dom";
import "./index.css";
import "./semantic/dist/semantic.min.css";
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
    console.log("using cordova");
    document.addEventListener(
        "deviceready",
        () => {
            console.log("about to init app");
            initApp(CordovaApp);
            console.log("app initted");
        },
        false
    );
} else {
    initApp(BrowserApp);
}
