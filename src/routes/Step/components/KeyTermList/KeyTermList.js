import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "../../../../modules/config/theme";

const Wrapper = styled.div``;

const ListWrapper = styled.ul`
    list-style: none;
`;

const KeyTerm = styled.li`
    &::before {
        content: "\\2022";
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
        const { terms, children } = this.props;
        return (
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
        );
    }
}

KeyTermList.propTypes = {
    terms: PropTypes.arrayOf(PropTypes.object).isRequired,
    extraInfo: PropTypes.node
};
export default KeyTermList;
