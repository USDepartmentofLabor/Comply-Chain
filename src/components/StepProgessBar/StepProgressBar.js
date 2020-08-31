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
import { isBrowser } from "../../modules/utils/platform";

const Wrapper = styled.div`
	& .RSPBstep {
		top: -50%;
	}
`;

const StepCircle = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${theme.colors.white};
    border-radius: 50%;
    position: relative;
`;

const StepProgress = styled.div`
    width: ${props => (props.viewing ? "10px" : "20px")};
    height: 20px;
    background-color: ${props => {
        if (props.viewing) {
            return theme.colors.gold;
        }
        if (props.accomplished) {
            return theme.colors.green;
        }
        return theme.colors.white;
    }};
    border-top-left-radius: 110px;
    border-bottom-left-radius: 110px;
    border-top-right-radius: ${props => (props.viewing ? 0 : "110px")};
    border-bottom-right-radius: ${props => (props.viewing ? 0 : "110px")};
`;

const StepNumber = styled.span`
    color: ${props => {
        if (props.viewing) {
            return theme.colors.primary;
        }
        if (props.accomplished) {
            return theme.colors.white;
        }
        return theme.colors.primary;
    }};
    font-size: 15px;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
        const path = isBrowser()
            ? window.location.pathname
            : window.location.href.split("#")[1];
        let match = matchPath(path, {
            path: Routes.Step.path
        });

        if (match && match.params && match.params.step) {
            if (this.state.currentStep !== match.params.step) {
                this.setState({ currentStep: match.params.step });
            }
        } else {
            if (this.state.currentStep !== undefined)
                this.setState({ currentStep: undefined });
        }
    };
    render() {
        const { localizor } = this.props;
        const numOfSteps = localizor.strings.steps.length;
        let currentStep = this.state.currentStep - 1;
        let progressStep = currentStep;
        if (isNaN(progressStep)) {
            progressStep = storage.steps.findNextIncompleteStep(numOfSteps);
        }
        const percent = Math.min((100 / numOfSteps + 1.75) * progressStep, 100);
        return (
			<Wrapper>
				<ProgressBar
					percent={percent}
					currentStep={currentStep}
					unfilledBackground={theme.colors.white}
					filledBackground={theme.colors.primary}
				>
					{localizor.strings.steps.map((step, i) => {
						const stepComplete = storage.steps.isStepComplete(i);
						return (
							<Step key={`progress_${step.title}`}>
								{() => (
									<StepCircle>
										<StepProgress
											accomplished={stepComplete}
											viewing={currentStep === i}
										>
											<StepNumber
												accomplished={stepComplete}
												viewing={currentStep === i}
												aria-label={`${
													localizor.strings.general.step
												} ${i + 1}`}
												aria-hidden={true}
											>
												{i + 1}
											</StepNumber>
										</StepProgress>
									</StepCircle>
								)}
							</Step>
						);
					})}
				</ProgressBar>
			</Wrapper>
        );
    }
}
StepProgressBar.propTypes = {
    localizor: PropTypes.object.isRequired
};
export default withLanguageContext(StepProgressBar);
