import React, { Component } from "react";
import {
    IoIosArrowDropdown,
    IoIosArrowDropright,
    IoMdArrowDropleft,
    IoMdArrowDropright,
    IoMdBookmarks,
    IoMdHelpCircleOutline,
    IoMdSearch,
    IoMdShareAlt
} from "react-icons/io";
import { MdChevronRight, MdFeedback, MdLightbulbOutline } from "react-icons/md";
import { StepIcon } from "./StepIcons";
import { SVG } from "./SVG";

class Icons extends Component {}

Icons.Feedback = MdFeedback;
Icons.Lightbulb = MdLightbulbOutline;
Icons.ChevronRight = MdChevronRight;
Icons.ArrowDropLeft = IoMdArrowDropleft;
Icons.ArrowDropRight = IoMdArrowDropright;
Icons.HelpCircle = IoMdHelpCircleOutline;
Icons.Bookmarks = IoMdBookmarks;
Icons.Search = IoMdSearch;
Icons.Share = IoMdShareAlt;
Icons.ArrowCircleRight = IoIosArrowDropright;
Icons.ArrowCircleDown = IoIosArrowDropdown;

Icons.StepIcon = StepIcon;
Icons.BookmarkCheck = props => (
    <SVG {...props}>
        <path d="m152 64c-22.002 0-40 17.998-40 40v344l144-64 144 64v-344c0-22.002-17.998-40-40-40h-208zm184.54 48.848 37.584 23.012-150.34 215.54-85.908-62.129s23.012-29.915 26.08-31.449l52.158 32.217 120.42-177.19z" />
    </SVG>
);

export default Icons;
