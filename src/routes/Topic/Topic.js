import PropTypes from "prop-types";
import React, { Component } from "react";
import TopicView from "./components/TopicView";

class Topic extends Component {
    render() {
        const {
            match: {
                params: { step, topic }
            },
            pdf
        } = this.props;

        return (
            <TopicView step={Number(step)} topic={Number(topic)} pdf={pdf} />
        );
    }
}

Topic.propTypes = {
    match: PropTypes.object.isRequired,
    pdf: PropTypes.bool
};

export default Topic;
