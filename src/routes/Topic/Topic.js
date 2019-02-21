import PropTypes from "prop-types";
import React, { Component } from "react";
import TopicView from "./components/TopicView";

class Topic extends Component {
    render() {
        const {
            match: {
                params: { step, topic }
            }
        } = this.props;

        return <TopicView step={Number(step)} topic={Number(topic)} />;
    }
}

Topic.propTypes = {
    match: PropTypes.object.isRequired
};

export default Topic;
