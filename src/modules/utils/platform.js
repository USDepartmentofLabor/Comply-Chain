export const isIOS = () => {
    if (!window.cordova) {
        return false;
    }

    if (window.device.platform === "iOS") {
        return true;
    }

    return false;
};

export const isAndroid = () => {
    if (!window.cordova) {
        return false;
    }

    if (window.device.platform === "Android") {
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
