import { theme } from "../config/theme";

export const isIOS = () => {
    if (!window.cordova) {
        return false;
    }

    if (window.cordova.platformId === "ios") {
        return true;
    }

    return false;
};

export const isAndroid = () => {
    if (!window.cordova) {
        return false;
    }

    if (window.cordova.platformId === "android") {
        return true;
    }

    return false;
};

export const isBrowser = () => {
    if (!window.cordova) {
        return true;
    }
    return false;
};



export const inAppBrowserOptions = () => {
    if (window.cordova.platformId === "ios") {
        const closebuttoncolor = theme.colors.offWhite;
        return "".concat(
            "closebuttoncolor=", closebuttoncolor
        );
        
    }
    return "";
};

export const inAppBrowserOptions1 = () => {
    if (window.cordova.platformId === "ios") {
        const navigationbuttoncolor = theme.colors.offWhite;
        return "".concat(
            "navigationbuttoncolor=", navigationbuttoncolor
        );
        
    }
    return "";
};