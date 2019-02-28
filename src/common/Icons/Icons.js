import { Component } from "react";
import { MdChevronRight, MdFeedback, MdLightbulbOutline } from "react-icons/md";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

class Icons extends Component {}

Icons.Feedback = MdFeedback;
Icons.Lightbulb = MdLightbulbOutline;
Icons.ChevronRight = MdChevronRight;
Icons.ArrowDropLeft = IoMdArrowDropleft;
Icons.ArrowDropRight = IoMdArrowDropright;

export default Icons;
