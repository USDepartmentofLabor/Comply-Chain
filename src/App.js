import React, { Component } from "react";
import "./App.css";
import AppWrapper from "./components/AppWraapper";
import { LanguageProvider } from "./components/Language";
import { isBrowser, isIOS, isAndroid } from "./modules/utils/platform";
import { isSplashComplete } from "./modules/storage";
import { Splash } from "./routes";

class App extends Component {
    state = { splashComplete: false };
    handleSplashComplete = () => {
        this.setState({ splashComplete: true });
    };
    render() {
        return (
            <LanguageProvider>
                {isBrowser() && <AppWrapper />}
                {(isIOS() || isAndroid()) && (
                    <div>
                        {isSplashComplete() && <AppWrapper />}
                        {!isSplashComplete() && (
                            <Splash onComplete={this.handleSplashComplete} />
                        )}
                    </div>
                )}
            </LanguageProvider>
        );
    }
}

export default App;
