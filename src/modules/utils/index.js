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
