import PropTypes from "prop-types";
import qs from "query-string";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import reactStringReplace from "react-string-replace";
import styled from "styled-components";
import { isBrowser } from "../../modules/utils/platform";

const Highlight = styled.mark`
    background-color: ${props => (props.active ? "yellow" : "initial")};
`;

class Searchable extends Component {
    state = { active: true };

    componentDidMount() {
        if (this.highlight) {
            if (!isBrowser()) {
                setTimeout(() => {
                    this.highlight.scrollIntoView(true);
                }, 50);
            } else {
                this.highlight.scrollIntoView(true);
            }
        }
        document.addEventListener("click", this.hideHighlights);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.hideHighlights);
    }

    highlightTextInChildren = (children, search) => {
        return React.Children.map(children, child => {
            if (!child) {
                return null;
            }
            if (typeof child === "string") {
                const result = reactStringReplace(child, search, (match, i) => {
                    return (
                        <Highlight
                            ref={node => {
                                if (!this.highlight) {
                                    this.highlight = node;
                                }
                            }}
                            key={i}
                            active={this.state.active}
                        >
                            {match}
                        </Highlight>
                    );
                });
                return result;
            }
            if (child.props.children) {
                return React.cloneElement(child, {
                    children: this.highlightTextInChildren(
                        child.props.children,
                        search
                    )
                });
            }

            return child;
        });
    };

    hideHighlights = () => {
        this.highlight = null;
        this.setState({ active: false });
    };

    render() {
        const { children, history } = this.props;
        const search = qs.parse(history.location.search).search;

        if (search) {
            return <div>{this.highlightTextInChildren(children, search)}</div>;
        }
        return <div onClick={this.hideHighlights}>{children}</div>;
    }
}

Searchable.propTypes = {
    history: PropTypes.object.isRequired
};

export default withRouter(Searchable);
