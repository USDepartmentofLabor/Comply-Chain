import PropTypes from "prop-types";
import React, { Component } from "react";
import StepView from "./components/StepView";

class Step extends Component {
    render() {
        const {
            match: {
                params: { step }
            },
            pdf
        } = this.props;
        return <StepView step={Number(step)} pdf={pdf} />;
    }
}

Step.propTypes = {
    match: PropTypes.object.isRequired,
    pdf: PropTypes.bool
};

export default Step;
