import { Component } from "react";
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

export default Icons;
