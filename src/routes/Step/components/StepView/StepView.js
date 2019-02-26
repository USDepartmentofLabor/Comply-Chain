import PropTypes from "prop-types";
import React, { Component } from "react";
import AccordionView from "../../../../common/AccordionView";
import { strings } from "../../../../modules/config/strings";
import KeyTermList from "../KeyTermList";
import LearningObjectiveList from "../LearningObjectiveList";
import TopicsList from "../TopicList";

class StepView extends Component {
    constructor(props) {
        super(props);
        const { step } = this.props;

        const stepData = strings.steps[step - 1];
        if (stepData) {
            const topics = stepData.topics;
            const learningObjectives = stepData.learningObjectives;
            const keyTerms = stepData.keyTerms;
            const Resources = stepData.furtherResources;
            const Training = stepData.training;
            this.state = {
                data: {
                    resources: {
                        title: "Further Resources",
                        content: Resources && <Resources />
                    },
                    learningObjectives: {
                        title: "Learning Objectives",
                        content: (
                            <LearningObjectiveList
                                objectives={learningObjectives}
                            />
                        )
                    },
                    keyTerms: {
                        title: "Key Terms",
                        content: <KeyTermList terms={keyTerms} />
                    },
                    topics: {
                        title: "Topics",
                        content: (
                            <TopicsList step={Number(step)} topics={topics} />
                        )
                    },
                    training: {
                        title: "Training Materials",
                        content: Training && <Training />
                    }
                }
            };
        }
    }
    render() {
        const {
            data,
            data: { learningObjectives, keyTerms, topics, resources, training }
        } = this.state;
        if (!data) {
            return <div>Step not found!</div>;
        }
        const sections = [learningObjectives, keyTerms, topics];
        if (resources.content) {
            sections.push(resources);
        }
        if (training.content) {
            sections.push(training);
        }
        return <AccordionView sections={sections} />;
    }
}

StepView.propTypes = {
    step: PropTypes.number.isRequired
};

export default StepView;
