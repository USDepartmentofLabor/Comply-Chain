import PropTypes from "prop-types";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withLanguageContext } from "../../../../components/Language";
import Button from "../../../../components/Button";
import Icons from "../../../../components/Icons";
import { withRouter } from "react-router-dom";

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
                    !nextTopic && localizor.strings.steps[step] && step;
                this.state = {
                    topicData: stepData.topics[topic - 1].content,
                    prevTopic: prevTopic && `/steps/${step}/topic/${prevTopic}`,
                    nextTopic: nextTopic && `/steps/${step}/topic/${nextTopic}`,
                    nextStep: nextStep && `/steps/${nextStep}`
                };
            }
        }
    }

    navigate = path => {
        const { history } = this.props;
        history.push(path);
    };

    render() {
        const { topicData, prevTopic, nextTopic, nextStep } = this.state;
        const { step, localizor } = this.props;
        if (topicData) {
            const TopicData = topicData;
            return (
                <div>
                    <TopicData />

                    {prevTopic && (
                        <Button
                            variant="primaryDarkest"
                            onClick={() => this.navigate(prevTopic)}
                        >
                            <Icons.ArrowDropLeft />
                            {localizor.strings.general.prevTopic}
                        </Button>
                    )}
                    {nextTopic && (
                        <Button
                            variant="primary"
                            onClick={() => this.navigate(nextTopic)}
                        >
                            {localizor.strings.general.nextTopic}
                            <Icons.ArrowDropRight />
                        </Button>
                    )}
                    {nextStep && (
                        <Button
                            variant="primary"
                            onClick={() => this.navigate(nextStep)}
                        >
                            {localizor.strings.general.nextStep}
                            <Icons.ArrowDropRight />
                        </Button>
                    )}
                </div>
            );
        }

        return <Redirect to={"/steps/" + step} />;
    }
}

TopicView.propTypes = {
    step: PropTypes.number.isRequired,
    topic: PropTypes.number.isRequired,
    localizor: PropTypes.object.isRequired
};

export default withRouter(withLanguageContext(TopicView));
