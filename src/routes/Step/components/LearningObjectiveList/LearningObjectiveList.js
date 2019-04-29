import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import Searchable from "../../../../components/Searchable";

const Wrapper = styled.ul``;

const Objective = styled.li``;
class LearningObjectiveList extends Component {
    render() {
        const { objectives } = this.props;
        return (
            <Searchable>
                <Wrapper>
                    {objectives.map((objective, i) => {
                        return <Objective key={i}>{objective}</Objective>;
                    })}
                </Wrapper>
            </Searchable>
        );
    }
}

LearningObjectiveList.propTypes = {
    objectives: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default LearningObjectiveList;
