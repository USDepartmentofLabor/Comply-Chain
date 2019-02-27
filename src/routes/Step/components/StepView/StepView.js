import PropTypes from "prop-types";
import React, { Component } from "react";
import AccordionView from "../../../../common/AccordionView";
import { withLanguageContext } from "../../../../common/Language";
import KeyTermList from "../KeyTermList";
import LearningObjectiveList from "../LearningObjectiveList";
import TopicsList from "../TopicList";

class StepView extends Component {
    constructor(props) {
        super(props);
        const { step, localizor } = this.props;

        const stepData = localizor.strings.steps[step - 1];
        if (stepData) {
            const topics = stepData.topics;
            const learningObjectives = stepData.learningObjectives;
            const keyTerms = stepData.keyTerms;
            const Resources = stepData.furtherResources;
            const Training = stepData.training;
            this.state = {
                data: {
                    resources: {
                        title: localizor.strings.general.furtherResources,
                        content: Resources && <Resources />,
                        id: "resources"
                    },
                    learningObjectives: {
                        title: localizor.strings.general.learningObjectives,
                        content: (
                            <LearningObjectiveList
                                objectives={learningObjectives}
                            />
                        ),
                        id: "learning-objectives"
                    },
                    keyTerms: {
                        title: localizor.strings.general.keyTerms,
                        content: <KeyTermList terms={keyTerms} />,
                        id: "key-terms"
                    },
                    topics: {
                        title: localizor.strings.general.topics,
                        content: (
                            <TopicsList step={Number(step)} topics={topics} />
                        ),
                        id: "topics"
                    },
                    training: {
                        title: localizor.strings.general.training,
                        content: Training && <Training />,
                        id: "training"
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
        return <AccordionView id="step-accordions" sections={sections} />;
    }
}

StepView.propTypes = {
    step: PropTypes.number.isRequired
};

export default withLanguageContext(StepView);
