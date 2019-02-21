import PropTypes from "prop-types";
import React, { Component } from "react";

class KeyTermList extends Component {
    render() {
        const { terms } = this.props;
        return (
            <ul>
                {terms.map((term, i) => {
                    return (
                        <li key={i}>
                            <strong>{term.termName}</strong> ---{" "}
                            {term.termDefinition}
                        </li>
                    );
                })}
            </ul>
        );
    }
}

KeyTermList.propTypes = {
    terms: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default KeyTermList;
