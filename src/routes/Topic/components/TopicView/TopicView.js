import PropTypes from "prop-types";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withLanguageContext } from "../../../../components/Language";
import Button from "../../../../components/Button";
import Icons from "../../../../components/Icons";
import { withRouter } from "react-router-dom";
import { storage } from "../../../../modules/storage";
import styled from "styled-components";

const TopicNavButtonGroup = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
`;
class TopicView extends Component {
    constructor(props) {
        super(props);
        const { step, topic, localizor } = this.props;
        const stepData = localizor.strings.steps[step - 1];
        if (stepData) {
            if (stepData.topics[topic - 1]) {
                const prevTopic =
                    (stepData.topics[topic - 2] && topic - 1) || null;
                const nextTopic = (stepData.topics[topic] && topic + 1) || null;
                const nextStep =
                    !nextTopic && localizor.strings.steps[step] && step + 1;
                this.state = {
                    topicData: stepData.topics[topic - 1].content,
                    prevTopic: prevTopic && `/steps/${step}/topic/${prevTopic}`,
                    nextTopic: nextTopic && `/steps/${step}/topic/${nextTopic}`,
                    nextStep: nextStep && `/steps/${nextStep}`
                };
                storage.steps.createStep(step - 1, stepData.topics.length);
                storage.steps.markTopicComplete(step - 1, topic - 1);
            }
        }
    }

    navigate = path => {
        const { history } = this.props;
        history.push(path);
    };

    render() {
        const { topicData, prevTopic, nextTopic, nextStep } = this.state;
        const { step, localizor, pdf } = this.props;
        if (topicData) {
            const TopicData = topicData;
            return (
                <div>
                    <TopicData pdf={pdf} />
                    <TopicNavButtonGroup>
                        {prevTopic && (
                            <Button
                                id="prev-topic"
                                variant="primaryDarkest"
                                onClick={() => this.navigate(prevTopic)}
                            >
                                <Icons.ArrowDropLeft />
                                {localizor.strings.general.prevTopic}
                            </Button>
                        )}
                        {nextTopic && (
                            <Button
                                id="next-topic"
                                variant="primary"
                                onClick={() => this.navigate(nextTopic)}
                            >
                                {localizor.strings.general.nextTopic}
                                <Icons.ArrowDropRight />
                            </Button>
                        )}
                        {nextStep && (
                            <Button
                                id="next-step"
                                variant="primary"
                                onClick={() => this.navigate(nextStep)}
                            >
                                {localizor.strings.general.nextStep}
                                <Icons.ArrowDropRight />
                            </Button>
                        )}
                    </TopicNavButtonGroup>
                </div>
            );
        }

        return <Redirect to={"/steps/" + step} />;
    }
}

TopicView.propTypes = {
    step: PropTypes.number.isRequired,
    topic: PropTypes.number.isRequired,
    localizor: PropTypes.object.isRequired,
    pdf: PropTypes.bool
};

export default withRouter(withLanguageContext(TopicView));
