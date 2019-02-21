import React, { Component } from "react";
import { Navigator } from "./common/Navigation";
import "./semantic/dist/semantic.min.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigator />
            </div>
        );
    }
}

export default App;
