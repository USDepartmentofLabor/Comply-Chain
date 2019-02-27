import PropTypes from "prop-types";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withLanguageContext } from "../../../../common/Language";

class TopicView extends Component {
    render() {
        const { step, topic, localizor } = this.props;
        const stepData = localizor.strings.steps[step - 1];
        if (stepData) {
            if (stepData.topics[topic - 1]) {
                const TopicData = stepData.topics[topic - 1].content;
                return (
                    <div>
                        <TopicData />
                    </div>
                );
            }
        }

        return <Redirect to={"/steps/" + step} />;
    }
}

TopicView.propTypes = {
    step: PropTypes.number.isRequired,
    topic: PropTypes.number.isRequired,
    localizor: PropTypes.object.isRequired
};

export default withLanguageContext(TopicView);
