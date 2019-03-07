import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icons from "../../components/Icons";
import { withLanguageContext } from "../../components/Language";
import Routes from "../../modules/config/routes";
import { theme } from "../../modules/config/theme";
import { getRawTextData } from "../../modules/utils";
import Highlighter from "react-highlight-words";

const WAIT_INTERVAL = 1000;

const SearchLabel = styled.label`
    position: relative;
    color: ${theme.colors.primaryAltDarkest};
    & svg {
        content: "";
        position: absolute;
        bottom: -25px;
        height: 100%;
        font-size: 2em;
        z-index: 1;
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
    padding: 20px 20px;
`;

const ResultTitle = styled(Link)`
    color: ${theme.colors.primary};
    font-size: 1.5em;
    font-weight: bold;
    text-decoration: none;
`;

const Snippet = styled(Highlighter)`
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

    handleChange = e => {
        const value = e.target.value;
        this.setState({ query: value, searching: true });
        clearTimeout(this.timer);
        this.timer = setTimeout(this.finish, WAIT_INTERVAL);
    };

    finish = () => {
        this.handleQuery();
    };

    handleQuery = () => {
        const { query } = this.state;
        if (query.length > 2) {
            this.setState({ results: this.search(query), searching: false });
        } else {
            this.setState({ results: [], searching: false });
        }
    };

    search = query => {
        const data = this.setupData();
        const pattern = new RegExp(query, "i");
        const filteredData = data.filter(val => this.filterData(val, pattern));

        const results = filteredData.map(item => {
            const snippets = this.generateSnippets(item, pattern, query);
            if (snippets.constructor === Array) {
                return Object.assign(...snippets);
            }
            return snippets;
        });

        return results;
    };

    setupData = () => {
        const { localizor } = this.props;
        const steps = localizor.strings.steps.map((step, i) => ({
            title: step.title,
            keywords: step.keywords,
            to: `/steps/${i + 1}`
        }));

        const furtherResources = localizor.strings.steps.map((step, i) => ({
            title: `${step.title} - Further Resources`,
            content:
                step.furtherResources &&
                getRawTextData(step.furtherResources()).join(" "),
            to: `/steps/${i + 1}#resources`
        }));
        const learningObjectives = localizor.strings.steps.map((step, i) => ({
            title: `${step.title} - Learning Objectives`,
            content: step.learningObjectives.join(" "),
            to: `/steps/${i + 1}#learning-objectives`
        }));
        const keyTerms = localizor.strings.steps.map((step, i) => ({
            title: `${step.title} - Key Terms`,
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

        const topics = localizor.strings.steps.map((step, stepIdx) =>
            step.topics.map((topic, topicIdx) => ({
                title: topic.title,
                keywords: topic.keywords,
                content: getRawTextData(topic.content().props.children).join(
                    " "
                ),
                to: `/steps/${stepIdx + 1}/topic/${topicIdx + 1}`
            }))
        );

        let info = [];
        for (const key in localizor.strings.info) {
            const item = localizor.strings.info[key];
            // convert the first letter of the object keys to uppercase in order to find the path based on the Routes object.
            const routeKey = key.charAt(0).toUpperCase() + key.slice(1);
            info.push({
                title: item.title,
                keywords: item.keywords,
                content: getRawTextData(item.content().props.children).join(
                    " "
                ),
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

    filterData = (data, query) => {
        if (data === null || data === undefined) {
            return false;
        }

        if (data.constructor === Array) {
            return data.reduce(
                (accum, item) => this.filterData(item, query),
                false
            );
        }
        if (typeof data === "string") {
            return query.test(data);
        }
        if (typeof data === "object") {
            for (const key in data) {
                if (this.filterData(data[key], query)) {
                    return true;
                }
            }
        }
        return false;
    };

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
                <SearchLabel>
                    <Icons.Search />
                    <SearchInput
                        id="search-input"
                        placeholder={localizor.strings.general.search}
                        value={query}
                        onChange={this.handleChange}
                    />
                </SearchLabel>
                {results.map((result, i) => {
                    return (
                        <SearchResult key={`search_results_${i}`}>
                            {result.to && (
                                <ResultTitle to={result.to} target="_blank">
                                    {result.title}
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

export default withLanguageContext(Search);
