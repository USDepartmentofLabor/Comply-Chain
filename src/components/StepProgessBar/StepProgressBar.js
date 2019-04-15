import PropTypes from "prop-types";
import React, { Component } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import styled from "styled-components";
import { theme } from "../../modules/config/theme";
import { storage } from "../../modules/storage";
import { withLanguageContext } from "../Language";
import { matchPath } from "react-router";
import Routes from "../../modules/config/routes";

const StepProgress = styled.div`
    color: white;
    width: 20px;
    height: 20px;
    font-size: 12px;
    background-color: ${props => {
        if (props.viewing) {
            return theme.colors.yellow;
        }
        if (props.accomplished) {
            return theme.colors.green;
        }
        return theme.colors.gray;
    }};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

class StepProgressBar extends Component {
    state = { currentStep: undefined };
    componentDidMount() {
        this.checkStepInfo();
    }
    componentDidUpdate() {
        this.checkStepInfo();
    }

    checkStepInfo = () => {
        let match = matchPath(window.location.pathname, {
            path: Routes.Step.path
        });

        if (match && match.params && match.params.step) {
            if (this.state.currentStep !== match.params.step) {
                this.setState({ currentStep: match.params.step });
            }
        }
    };
    render() {
        const { localizor } = this.props;
        const numOfSteps = localizor.strings.steps.length;
        let currentStep = this.state.currentStep - 1;
        if (isNaN(currentStep)) {
            currentStep = storage.steps.findNextIncompleteStep(numOfSteps);
        }
        const percent = (100 / numOfSteps + 1.75) * currentStep;
        return (
            <ProgressBar
                percent={percent}
                currentStep={currentStep}
                filledBackground={theme.colors.primary}
            >
                {localizor.strings.steps.map((step, i) => {
                    return (
                        <Step key={`progress_${step.title}`}>
                            {() => (
                                <StepProgress
                                    accomplished={storage.steps.isStepComplete(
                                        i
                                    )}
                                    viewing={currentStep === i}
                                >
                                    {i + 1}
                                </StepProgress>
                            )}
                        </Step>
                    );
                })}
            </ProgressBar>
        );
    }
}
StepProgressBar.propTypes = {
    localizor: PropTypes.object.isRequired
};
export default withLanguageContext(StepProgressBar);
