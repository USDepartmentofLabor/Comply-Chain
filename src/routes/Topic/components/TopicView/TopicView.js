import PropTypes from "prop-types";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withLanguageContext } from "../../../../components/Language";
import Button from "../../../../components/Button";
import Icons from "../../../../components/Icons";
import { withRouter } from "react-router-dom";
import { storage } from "../../../../modules/storage";
import styled from "styled-components";
import Bookmarkable from "../../../../components/Bookmarkable";

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
            this.state = this.buildTopicData();
            storage.steps.createStep(step - 1, stepData.topics.length);
            storage.steps.markTopicComplete(step - 1, topic - 1);
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.localizor.language !== this.props.localizor.language) {
            this.setState(this.buildTopicData());
        }
    }

    buildTopicData = () => {
        const { step, topic, localizor } = this.props;
        const stepData = localizor.strings.steps[step - 1];
        let items;
        if (stepData) {
            if (stepData.topics[topic - 1]) {
                const prevTopic =
                    (stepData.topics[topic - 2] && topic - 1) || null;
                const nextTopic = (stepData.topics[topic] && topic + 1) || null;
                const prevStep =
                    (!prevTopic &&
                        localizor.strings.steps[step - 2] &&
                        step - 1) ||
                    null;
                const nextStep =
                    !nextTopic && localizor.strings.steps[step] && step + 1;
                items = {
                    title: stepData.topics[topic - 1].title,
                    titleString: `steps.${step - 1}.topics.${topic - 1}.title`,
                    topicData: stepData.topics[topic - 1].content,
                    prevStep: prevStep && `/steps/${prevStep}`,
                    prevTopic: prevTopic && `/steps/${step}/topic/${prevTopic}`,
                    nextTopic: nextTopic && `/steps/${step}/topic/${nextTopic}`,
                    nextStep: nextStep && `/steps/${nextStep}`
                };
            }
        }
        return items;
    };

    navigate = path => {
        const { history } = this.props;
        history.push(path);
    };

    render() {
        const {
            topicData,
            prevStep,
            prevTopic,
            nextTopic,
            nextStep,
            titleString
        } = this.state;
        const { step, localizor, pdf, location } = this.props;
        if (topicData) {
            const TopicData = topicData;
            return (
                <Bookmarkable titleString={titleString} url={location.pathname}>
                    <TopicData pdf={pdf} />
                    <TopicNavButtonGroup>
                        {prevStep && (
                            <Button
                                id="prev-step"
                                variant="primaryDarkest"
                                onClick={() => this.navigate(prevStep)}
                            >
                                <Icons.ArrowDropLeft />
                                {localizor.strings.general.prevStep}
                            </Button>
                        )}
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
                </Bookmarkable>
            );
        }

        return <Redirect to={"/steps/" + step} />;
    }
}

TopicView.propTypes = {
    step: PropTypes.number.isRequired,
    topic: PropTypes.number.isRequired,
    localizor: PropTypes.object.isRequired,
    pdf: PropTypes.bool,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default withRouter(withLanguageContext(TopicView));
