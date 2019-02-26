import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Localize } from "../../modules/config/strings";

class Steps extends Component {
    state = { steps: Localize.getStrings().steps };
    render() {
        const { steps } = this.state;

        return (
            <div>
                <ol>
                    {steps.map((step, i) => {
                        const stepId = i + 1;
                        return (
                            <li key={i}>
                                <Link to={`/steps/${stepId}`}>
                                    {step.title}
                                </Link>
                            </li>
                        );
                    })}
                </ol>
            </div>
        );
    }
}

export default Steps;
