import React, { Component } from "react";
import "./App.css";
import AppWrapper from "./components/AppWraapper";
import { LanguageProvider } from "./components/Language";

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
