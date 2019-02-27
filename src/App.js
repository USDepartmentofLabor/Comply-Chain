import React, { Component } from "react";
import "./App.css";
import AppWrapper from "./common/AppWraapper";
import { LanguageProvider } from "./common/Language";

class App extends Component {
    render() {
        return (
            <LanguageProvider>
                <AppWrapper />
            </LanguageProvider>
        );
    }
}

export default App;
