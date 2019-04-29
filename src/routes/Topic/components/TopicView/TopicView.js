import PropTypes from "prop-types";
import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import styled from "styled-components";
import Bookmarkable from "../../../../components/Bookmarkable";
import Button from "../../../../components/Button";
import Icons from "../../../../components/Icons";
import { withLanguageContext } from "../../../../components/Language";
import { storage } from "../../../../modules/storage";

const HeaderIcon = styled.span`
    vertical-align: middle;
    padding-right: 10px;
`;

const TopicNavButtonGroup = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    & > * {
        margin: 0 5px;
    }
`;
const NavButton = styled(Button)`
    position: relative;
    width: 200px;
    padding: 15px;
    & svg {
        position: absolute;
        right: ${props => (props.right ? "0" : null)};
        left: ${props => (props.left ? "0" : null)};
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.25em;
    }
    margin-left: ${props => (props.right ? "auto" : undefined)};
    margin-right: ${props => (props.left ? "auto" : undefined)};
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
        if (
            prevProps.localizor.language !== this.props.localizor.language ||
            prevProps.location.pathname !== this.props.location.pathname
        ) {
            this.setState(this.buildTopicData());
            const { step, topic, localizor } = this.props;
            const stepData = localizor.strings.steps[step - 1];
            if (stepData) {
                storage.steps.createStep(step - 1, stepData.topics.length);
                storage.steps.markTopicComplete(step - 1, topic - 1);
            }
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
                    stepTitle: stepData.title,
                    titleString: `steps.${step - 1}.topics.${topic - 1}.title`,
                    stepTitleString: `steps.${step - 1}.title`,
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
            titleString,
            stepTitle,
            stepTitleString
        } = this.state;
        const { step, localizor, pdf, location } = this.props;
        if (topicData) {
            const TopicData = topicData;
            return (
                <Bookmarkable
                    headerTitle={stepTitleString}
                    titlePrefix={"general.topic"}
                    titleString={titleString}
                    url={location.pathname}
                    pdf={pdf}
                >
                    {pdf && (
                        <h1>
                            <HeaderIcon>
                                <Icons.StepIcon step={step} />
                            </HeaderIcon>
                            {stepTitle}
                        </h1>
                    )}
                    <TopicData pdf={pdf} />
                    {!pdf && (
                        <TopicNavButtonGroup>
                            {prevStep && (
                                <NavButton
                                    id="prev-step"
                                    variant="primaryDarkest"
                                    onClick={() => this.navigate(prevStep)}
                                    left
                                >
                                    <Icons.ArrowDropLeft />
                                    {localizor.strings.general.prevStep}
                                </NavButton>
                            )}
                            {prevTopic && (
                                <NavButton
                                    id="prev-topic"
                                    variant="primaryDarkest"
                                    onClick={() => this.navigate(prevTopic)}
                                    left
                                >
                                    <Icons.ArrowDropLeft />
                                    {localizor.strings.general.prevTopic}
                                </NavButton>
                            )}
                            {nextTopic && (
                                <NavButton
                                    id="next-topic"
                                    variant="primary"
                                    onClick={() => this.navigate(nextTopic)}
                                    right
                                >
                                    {localizor.strings.general.nextTopic}
                                    <Icons.ArrowDropRight />
                                </NavButton>
                            )}
                            {nextStep && (
                                <NavButton
                                    id="next-step"
                                    variant="primary"
                                    onClick={() => this.navigate(nextStep)}
                                    right
                                >
                                    {localizor.strings.general.nextStep}
                                    <Icons.ArrowDropRight />
                                </NavButton>
                            )}
                        </TopicNavButtonGroup>
                    )}
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
