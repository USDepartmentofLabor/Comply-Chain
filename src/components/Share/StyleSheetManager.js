import React, { createContext, Component } from "react";
import memoize from "memoize-one";
const StyleSheetContext = createContext();

export const StyleSheetConsumer = StyleSheetContext.Consumer;

export default class StyleSheetManager extends Component {
    constructor(props) {
        super(props);
        this.getContext = memoize(this.getContext);
    }

    getContext(sheet, target) {
        if (sheet) {
            return sheet;
        } else if (target) {
            return new StyleSheet(target);
        }
    }

    render() {
        const { children, sheet, target } = this.props;

        return (
            <StyleSheetContext.Provider value={this.getContext(sheet, target)}>
                {process.env.NODE_ENV !== "production"
                    ? React.Children.only(children)
                    : children}
            </StyleSheetContext.Provider>
        );
    }
}
