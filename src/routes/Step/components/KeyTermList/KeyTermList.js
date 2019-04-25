import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import Searchable from "../../../../components/Searchable";

const Wrapper = styled.div``;

const ListWrapper = styled.ul``;

const KeyTerm = styled.li``;

const TermDefinition = styled.p`
    margin-top: 0;
    padding-left: 1em;
`;
class KeyTermList extends Component {
    render() {
        const { terms, children } = this.props;
        return (
            <Searchable>
                <Wrapper>
                    <ListWrapper>
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
                    </ListWrapper>
                    {children}
                </Wrapper>
            </Searchable>
        );
    }
}

KeyTermList.propTypes = {
    terms: PropTypes.arrayOf(PropTypes.object).isRequired,
    extraInfo: PropTypes.node
};
export default KeyTermList;
