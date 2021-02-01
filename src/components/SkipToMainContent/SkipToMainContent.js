import React from "react";
import { isBrowser } from "../../modules/utils/platform";

const skipStyle = {
    height: 30,
    display: 'flex',
    alignItems: 'flex-end'

};
const SkipToMainContent = () => (
   //if () {
   <div tabIndex={1} style={skipStyle}>
        <a href = "#main" id="showSTM"> Skip to Main Content </a>
    </div>
    //}
);
export default SkipToMainContent;