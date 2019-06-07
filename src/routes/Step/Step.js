import PropTypes from "prop-types";
import React, { Component } from "react";
import StepView from "./components/StepView";

class Step extends Component {
    render() {
        const {
            match: {
                params: { step }
            }
        } = this.props;
        return <StepView step={Number(step)} />;
    }
}

Step.propTypes = {
    match: PropTypes.object.isRequired
};

export default Step;
