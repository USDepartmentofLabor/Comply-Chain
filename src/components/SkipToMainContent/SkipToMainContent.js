import React from "react";
import { isBrowser } from "../../modules/utils/platform";

const skipStyle = {
    height: 0,
    display: 'flex',
    alignItems:'flex-end',
    margin:'-1px'
};

function setTabIndex() {
       return document.getElementById("showSTM").style.height ==='0px' ? "-1" : "0";
}

const SkipToMainContent = () => (
   <div style={skipStyle} id="showSTM" tabIndex={setTabIndex} role="link">
        <a href = "#main" id="showSTM1"> Skip to Main Content </a>
    </div>
);
export default SkipToMainContent;