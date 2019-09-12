import React from "react";
const skipStyle = {
    height: 40,
    display: 'flex',
    alignItems: 'flex-end'

};
const SkipToMainContent = () => (
    <div tabIndex={1} style={skipStyle}>
        <a href = "#main" > Skip to Main Content </a>
    </div>
);
export default SkipToMainContent;