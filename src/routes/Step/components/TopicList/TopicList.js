import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopicsList extends Component {
    render() {
        const { step, topics } = this.props;
        return (
            <ul>
                {topics.map((topic, i) => {
                    const topicId = i + 1;
                    return (
                        <li key={i}>
                            <Link to={`/steps/${step}/topic/${topicId}`}>
                                {topic.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

TopicsList.propTypes = {
    step: PropTypes.number.isRequired,
    topics: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TopicsList;
