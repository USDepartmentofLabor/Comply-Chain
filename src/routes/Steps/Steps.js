import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withLanguageContext } from "../../components/Language";
import PropTypes from "prop-types";

class Steps extends Component {
    state = { steps: this.props.localizor.strings.steps };
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
Steps.propTypes = {
    localizor: PropTypes.object.isRequired
};

export default withLanguageContext(Steps);
