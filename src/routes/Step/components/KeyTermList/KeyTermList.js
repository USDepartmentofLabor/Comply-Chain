import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "../../../../modules/config/theme";

const Wrapper = styled.ul`
    list-style: none;
`;

const KeyTerm = styled.li`
    &::before {
        content: "\u2022";
        color: ${theme.colors.primary};
        display: inline-block;
        font-weight: bold;
        font-size: 1.5em;
        padding-right: 7px;
    }
`;

const TermDefinition = styled.p`
    margin-top: 0;
    padding-left: 1em;
`;
class KeyTermList extends Component {
    render() {
        const { terms } = this.props;
        return (
            <Wrapper>
                {terms.map((term, i) => {
                    return (
                        <KeyTerm key={i}>
                            <strong>{term.termName}</strong>
                            <TermDefinition>
                                {term.termDefinition}
                            </TermDefinition>
                        </KeyTerm>
                    );
                })}
            </Wrapper>
        );
    }
}

KeyTermList.propTypes = {
    terms: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default KeyTermList;
