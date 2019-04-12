import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.ul``;

const Objective = styled.li``;
class LearningObjectiveList extends Component {
    render() {
        const { objectives } = this.props;
        return (
            <Wrapper>
                {objectives.map((objective, i) => {
                    return <Objective key={i}>{objective}</Objective>;
                })}
            </Wrapper>
        );
    }
}

LearningObjectiveList.propTypes = {
    objectives: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default LearningObjectiveList;
