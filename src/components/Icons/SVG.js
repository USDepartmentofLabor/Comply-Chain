import React from "react";

export const SVG = ({ width, height, viewBox, className, children }) => (
    <svg
        className={className}
        viewBox={viewBox || "0 0 512 512"}
        width={width || "1em"}
        height={height || "1em"}
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
    >
        {children}
    </svg>
);
