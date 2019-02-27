import React from "react";
import { LanguageContext } from ".";

export function withLanguageContext(Component) {
    return function WrapperComponent(props) {
        return (
            <LanguageContext.Consumer>
                {state => <Component {...props} localizor={state} />}
            </LanguageContext.Consumer>
        );
    };
}
