import React, { Component } from "react";
import Searchable from "../Searchable";

class StaticData extends Component {
    render() {
        return <Searchable>{this.props.children}</Searchable>;
    }
}

export default StaticData;
