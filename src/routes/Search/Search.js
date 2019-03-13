import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icons from "../../components/Icons";
import { withLanguageContext } from "../../components/Language";
import Routes from "../../modules/config/routes";
import { theme } from "../../modules/config/theme";
import { getRawTextData } from "../../modules/utils";
import Highlighter from "react-highlight-words";

const SearchLabel = styled.label`
    position: relative;
    color: ${theme.colors.primaryAltDarkest};
    & svg {
        content: "";
        position: absolute;
        bottom: -26px;
        height: 20px;
        font-size: 2em;
        z-index: 5;
    }
`;

const SearchInput = styled.input`
    display: block;
    color: ${theme.colors.base};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.grayLight};
    padding: 10px 25px;
    width: 100%;
    box-sizing: border-box;
`;

const SearchResultsHeader = styled.h4`
    color: ${theme.colors.base};
    & .query {
        color: ${theme.colors.primaryAltDarkest};
    }
`;

const SearchResult = styled.div`
    border: 1px solid ${theme.colors.grayLight};
    margin-top: 1em;
    padding: 0 20px 20px;
`;

const ResultTitle = styled(Link)`
    color: ${theme.colors.primary};
    text-decoration: none;
`;

const Snippet = styled(Highlighter)`
    overflow-wrap: break-word;
    & mark {
        color: ${theme.colors.primary};
        font-weight: bold;
        background-color: ${theme.colors.white};
    }
`;

const SnippetLink = styled(Link)`
    color: ${theme.colors.primary};
    text-decoration: none;
`;

class Search extends Component {
    state = { query: "", results: [], searching: false };

    /**
     * Handles the user input in the search field. Users a short timer to prevent searching on each keystroke.
     */
    handleChange = e => {
        const value = e.target.value;
        this.setState({ query: value, searching: true });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.finish();
    };

    /**
     * Fires when search input timer expires.
     */
    finish = () => {
        this.handleQuery();
        if (this.state.query !== "") {
            this.searchInput.blur();
        }
    };

    /**
     * Handles the query input and kicks off the search.
     */
    handleQuery = () => {
        const { query } = this.state;
        if (query.length > 2) {
            this.setState({ results: this.search(query), searching: false });
        } else {
            this.setState({ results: [], searching: false });
        }
    };

    /**
     * Search logic.
     *
     * @param query the query string to search by.
     */
    search = query => {
        const data = this.setupData();
        const pattern = new RegExp(query, "i");
        const filteredData = data.filter(val =>
            this.filterData(val, pattern, ["to"])
        );

        const results = filteredData.map(item => {
            const snippets = this.generateSnippets(item, pattern, query);
            if (snippets.constructor === Array) {
                return Object.assign(...snippets);
            }
            return snippets;
        });

        return results;
    };

    /**
     * Aggregates and sets up language data and static components to search in the entire app.
     */
    setupData = () => {
        const { localizor } = this.props;
        const steps = localizor.strings.steps.map((step, i) => ({
            title: step.title,
            keywords: step.keywords,
            to: `/steps/${i + 1}`
        }));

        const furtherResources = localizor.strings.steps.map((step, i) => ({
            title: `${step.title} - ${
                localizor.strings.general.furtherResources
            }`,
            content:
                step.furtherResources &&
                getRawTextData(step.furtherResources()).join(" "),
            to: `/steps/${i + 1}#resources`
        }));
        const learningObjectives = localizor.strings.steps.map((step, i) => ({
            title: `${step.title} - ${
                localizor.strings.general.learningObjectives
            }`,
            content: step.learningObjectives.join(" "),
            to: `/steps/${i + 1}#learning-objectives`
        }));
        const keyTerms = localizor.strings.steps.map((step, i) => ({
            title: `${step.title} - ${localizor.strings.general.keyTerms}`,
            // map through keyterms to create an array of arrays and then flatten those arrays into a single array
            content: [].concat
                .apply(
                    [],
                    step.keyTerms.map(keyTerm => {
                        return Object.values(keyTerm);
                    })
                )
                .join(" "),
            to: `/steps/${i + 1}#key-terms`
        }));

        const topics = localizor.strings.steps.map((step, stepIdx) => {
            return step.topics.map((topic, topicIdx) => {
                return {
                    title: topic.title,
                    keywords: topic.keywords,
                    content: getRawTextData(
                        topic.content({ pdf: false }).props.children
                    ).join(" "),
                    to: `/steps/${stepIdx + 1}/topic/${topicIdx + 1}`
                };
            });
        });

        let info = [];
        for (const key in localizor.strings.info) {
            const item = localizor.strings.info[key];
            // convert the first letter of the object keys to uppercase in order to find the path based on the Routes object.
            const routeKey = key.charAt(0).toUpperCase() + key.slice(1);
            info.push({
                title: item.title,
                keywords: item.keywords,
                content: getRawTextData(
                    item.content({ pdf: false }).props.children
                ).join(" "),
                to: Routes[routeKey].path
            });
        }
        // merge all the data together in order to search it all
        return steps
            .concat(furtherResources)
            .concat(learningObjectives)
            .concat(keyTerms)
            .concat(topics)
            .concat(info);
    };

    /**
     * Filter object or array of object by a string query.
     *
     * @param data the data to filter
     * @param query the string to filter by
     * @param excluded_keys any keys to exclude when searching object keys.
     */
    filterData = (data, query, excluded_keys = []) => {
        if (data === null || data === undefined) {
            return false;
        }

        if (data.constructor === Array) {
            return data.reduce(
                (accum, item) => this.filterData(item, query, excluded_keys),
                false
            );
        }
        if (typeof data === "string") {
            return query.test(data);
        }
        if (typeof data === "object") {
            for (const key in data) {
                if (!excluded_keys.includes(key)) {
                    if (this.filterData(data[key], query, excluded_keys)) {
                        return true;
                    }
                }
            }
        }
        return false;
    };

    /**
     * Searches an item with string content for a string query and generates a short string snippet of the content.
     *
     * @param item the item to search
     * @param pattern the regex to use
     * @param query the string query
     */
    generateSnippets = (item, pattern, query) => {
        if (item.content) {
            const content = item.content;
            let snippets;
            if (pattern.test(content)) {
                const idx = content.toLowerCase().indexOf(query.toLowerCase());
                if (idx !== -1) {
                    snippets = this.shorten(content, 200, idx);
                }
            }

            return { ...item, snippets };
        } else if (item.constructor === Array) {
            return item.map(it => this.generateSnippets(it, pattern, query));
        }

        return item;
    };

    /**
     * Shortens a string up to a maximum length
     * or up to the last index of the given separator
     * in order to not cut off a string in the middle of a word.
     *
     * @param str the string to search
     * @param maxLen the maximum amount of characters to include from the index going backward and forward.
     * @param idx the index to start at in @str. Defaults to 0.
     * @param separator the character separator to stop at. Defaults to a single whitespace.
     */
    shorten = (str, maxLen, idx = 0, separator = " ") => {
        if (str.length <= maxLen) return str;
        // go back an X amount of characters before the index and grab the last whole word.
        const idxStart = idx - maxLen > 0 ? idx - maxLen : 0;
        const strBegin = str.substr(str.indexOf(separator, idxStart) + 1);
        const diff = idx - idxStart;
        return strBegin.substr(
            0,
            strBegin.lastIndexOf(separator, maxLen + diff)
        );
    };

    componentWillMount() {
        this.timer = null;
    }

    render() {
        const { localizor } = this.props;
        const { query, results, searching } = this.state;
        return (
            <div>
                {query && !searching && (
                    <SearchResultsHeader>
                        {results.length} search results for "
                        <span className="query">{query}</span>"
                    </SearchResultsHeader>
                )}
                <form onSubmit={this.handleSubmit}>
                    <SearchLabel>
                        <HiddenText508>Search</HiddenText508>
                        <Icons.Search role="img" aria-label="Search" />
                        <SearchInput
                            id="search-input"
                            type="search"
                            ref={input => (this.searchInput = input)}
                            placeholder={localizor.strings.general.search}
                            value={query}
                            onChange={this.handleChange}
                        />
                    </SearchLabel>
                </form>
                {results.map((result, i) => {
                    return (
                        <SearchResult key={`search_results_${i}`}>
                            {result.to && (
                                <ResultTitle to={result.to} target="_blank">
                                    <h3>{result.title}</h3>
                                </ResultTitle>
                            )}
                            <p>
                                <Snippet
                                    searchWords={[query]}
                                    autoEscape={true}
                                    textToHighlight={
                                        (result.snippets &&
                                            result.snippets + "...") ||
                                        ""
                                    }
                                />
                            </p>
                            <SnippetLink to={result.to} target="_blank">
                                Continue reading.
                            </SnippetLink>
                        </SearchResult>
                    );
                })}
            </div>
        );
    }
}

const HiddenText508 = styled.span`
    display: none;
`;

export default withLanguageContext(Search);
