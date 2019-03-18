import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "../../../../modules/config/theme";

const Wrapper = styled.ul`
    list-style: none;
`;

const Objective = styled.li`
    &::before {
        content: "\u2022";
        color: ${theme.colors.primary};
        display: inline-block;
        font-weight: bold;
        font-size: 1.5em;
        padding-right: 7px;
    }
`;
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
