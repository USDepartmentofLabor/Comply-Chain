import React from "react";
import { isBrowser } from "../../modules/utils/platform";

const skipStyle = {
    height: 30,
    display: 'none',
    alignItems:'flex-end',
    margin:'-1px'
};

function setTabIndex() {
    return "0";
       //return document.getElementById("showSTM").style.height ==='0px' ? "-1" : "0";
}

const SkipToMainContent = () => (
   <div style={skipStyle} id="showSTM">
        <a href = "#main" tabIndex={setTabIndex} id="showSTM1" role="none/presentation" aria-hidden="true"><span aria-label="Skip to Main Content"> Skip to Main Content </span></a>
    </div>
);
export default SkipToMainContent;