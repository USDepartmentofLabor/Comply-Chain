import React, { Component } from "react";
import AppWrapper from "./components/AppWraapper";
import { LanguageProvider } from "./components/Language";
import { storage } from "./modules/storage";
import { isAndroid, isBrowser, isIOS } from "./modules/utils/platform";
import { Splash } from "./routes";
import { AppGlobalStyles } from "./AppGlobalStyles";

class App extends Component {
    state = { splashComplete: false };
    handleSplashComplete = () => {
        this.setState({ splashComplete: true });
    };
    render() {
        return (
            <LanguageProvider>
                <AppGlobalStyles />
                {isBrowser() && <AppWrapper />}
                {(isIOS() || isAndroid()) && (
                    <div>
                        {storage.splash.isSplashComplete() && <AppWrapper />}
                        {!storage.splash.isSplashComplete() && (
                            <Splash onComplete={this.handleSplashComplete} />
                        )}
                    </div>
                )}
            </LanguageProvider>
        );
    }
}

export default App;
