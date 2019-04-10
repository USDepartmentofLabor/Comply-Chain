import React, { Component } from "react";
import {
    IoIosArrowDropdown,
    IoIosArrowDropright,
    IoMdArrowDropleft,
    IoMdArrowDropright
} from "react-icons/io";
import {
    MdChevronRight,
    MdFeedback,
    MdLightbulbOutline,
    MdBookmark
} from "react-icons/md";
import { StepIcon } from "./StepIcons";
import { SVG } from "./SVG";

class Icons extends Component {}

Icons.Feedback = MdFeedback;
Icons.Lightbulb = MdLightbulbOutline;
Icons.ChevronRight = MdChevronRight;
Icons.ArrowDropLeft = IoMdArrowDropleft;
Icons.ArrowDropRight = IoMdArrowDropright;
Icons.ArrowCircleRight = IoIosArrowDropright;
Icons.ArrowCircleDown = IoIosArrowDropdown;
Icons.BookmarkRibbon = MdBookmark;

Icons.StepIcon = StepIcon;

Icons.BookmarkCheck = props => (
    <SVG {...props}>
        <path d="m152 64c-22.002 0-40 17.998-40 40v344l144-64 144 64v-344c0-22.002-17.998-40-40-40h-208zm184.54 48.848 37.584 23.012-150.34 215.54-85.908-62.129s23.012-29.915 26.08-31.449l52.158 32.217 120.42-177.19z" />
    </SVG>
);
Icons.Bookmarks = props => (
    <SVG {...props} viewBox="0 0 512 585.21">
        <path d="m102.14 0a50.994 50.994 0 0 0-31.243 12.91l-57.957 58.049a50.932 50.932 0 0 0-12.941 31.212v464.77a18.487 18.487 0 0 0 18.271 18.271h420.58v-512h-109.72v256.02l-73.147-73.147-73.147 73.147v-256.02h-120.44l36.574-36.574h376.46v475.43h36.574v-512.06z" />
    </SVG>
);
Icons.Search = props => (
    <SVG {...props}>
        <path d="m507.33 438.67-89.181-89.188a227.01 227.02 0 1 0-68.695 68.7l89.181 89.134a16.324 16.325 0 0 0 22.88 0l45.788-45.764a16.324 16.325 0 0 0 0.0272-22.882zm-279.87-49.355a161.82 161.83 0 1 1 161.82-161.83 162.04 162.05 0 0 1-161.82 161.81z" />
    </SVG>
);
Icons.Share = props => (
    <SVG {...props} viewBox="0 0 512 384.08">
        <path d="m288 352h-256v-320h256v32h32v-64h-320v384.08h320v-64h-32zm224-159.29-128-128.71v64c-256 0-288 128-288 192.04 32-128 288-64 288-64v64z" />
    </SVG>
);
Icons.About = props => (
    <SVG {...props}>
        <path d="m255.97-1.4416e-4a256 256 0 1 0 256.03 255.97 256.03 256.03 0 0 0-256.03-255.97zm0 474.66a218.56 218.56 0 1 1 218.58-218.53 218.8 218.8 0 0 1-218.58 218.42zm-2.3335-385.38c-30.972 0-86.208 15.274-86.208 27.34l0.92811 5.1444 12.012 31.503 5.1179 4.614a179.42 179.42 0 0 1 57.941-15.274c25.059 0 38.53 11.535 38.53 32.882a40.89 40.89 0 0 1-32.935 40.36c-16.282 5.5156-32.908 7.4249-32.908 18.562v57.967c0 8.3265 1.3524 9.7054 9.6789 9.7054h33.889c8.3795 0 9.7584-1.3789 9.7584-9.7054v-31.503c27.366-9.3342 75.071-25.112 75.071-84.856a83.901 83.901 0 0 0-90.875-86.739zm-9.2546 255.02a38.795 38.795 0 0 0-39.458 39.405 39.193 39.193 0 1 0 39.458-39.405z" />
    </SVG>
);

export default Icons;
