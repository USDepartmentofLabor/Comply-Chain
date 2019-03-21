import React from "react";
import { isBrowser } from "./platform";
export const getRawTextData = children => {
    return React.Children.map(children, child => {
        if (typeof child === "string") {
            return child;
        }
        return getRawTextData(child.props.children);
    });
};

export const getHash = () => {
    const { hash } = window.location;
    if (isBrowser()) {
        const hashFrag = hash.split("#").slice(1);
        return hashFrag[hashFrag.length - 1];
    } else {
        if (hash.split("#").length <= 2) {
            return undefined;
        }
        const hashFrag = hash.split("#").slice(1);
        return hashFrag[hashFrag.length - 1];
    }
};
