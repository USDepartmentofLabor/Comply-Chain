import React from "react";
export const getRawTextData = children => {
    const regex = /\S/;
    return React.Children.map(children, child => {
        if (typeof child === "string") {
            if (regex.test(child)) {
                return child.trim();
            }
            return null;
        }
        return getRawTextData(child.props.children);
    });
};

export const getHash = () => {
    const { hash } = window.location;
    const hashFrag = hash.split("#").slice(1);
    return hashFrag[hashFrag.length - 1];
};
