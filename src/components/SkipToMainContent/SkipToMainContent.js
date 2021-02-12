import React from "react";
import { isBrowser } from "../../modules/utils/platform";

const skipStyle = {
    height: 0,
    display: 'flex',
    alignItems:'flex-end'
};

const SkipToMainContent = () => (
   <div style={skipStyle} id="showSTM">
        <a href = "#main"> Skip to Main Content </a>
    </div>
);
export default SkipToMainContent;