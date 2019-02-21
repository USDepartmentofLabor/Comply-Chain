import PropTypes from "prop-types";
import React, { Component } from "react";
class LearningObjectiveList extends Component {
    render() {
        const { objectives } = this.props;
        return (
            <ul>
                {objectives.map((objective, i) => {
                    return <li key={i}>{objective}</li>;
                })}
            </ul>
        );
    }
}

LearningObjectiveList.propTypes = {
    objectives: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default LearningObjectiveList;
