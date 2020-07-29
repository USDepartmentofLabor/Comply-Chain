import React from "react";
import { isIOS } from "../../modules/utils/platform";


export const SVG = ({ width, height, viewBox, className, children, alt, isAccessibilityElement }) => (
    <svg
        className={className}
        viewBox={viewBox || "0 0 512 512"}
        width={width || "1em"}
        height={height || "1em"}
        alt={alt}
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        focusable="false"
        accessible="false"
        isAccessibilityElement="false"
        aria-hidden="true"
    >
        {children}
    </svg>
);
