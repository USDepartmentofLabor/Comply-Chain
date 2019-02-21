import React, { Component } from "react";
import { strings } from "../../modules/config/strings";
import { AppLink } from "../../common/Navigation";

class Steps extends Component {
    state = { steps: strings.steps };
    render() {
        const { steps } = this.state;

        return (
            <div>
                <ol>
                    {steps.map((step, i) => {
                        const stepId = i + 1;
                        return (
                            <li key={i}>
                                <AppLink to={`/steps/${stepId}`}>
                                    {step.title}
                                </AppLink>
                            </li>
                        );
                    })}
                </ol>
            </div>
        );
    }
}

export default Steps;
