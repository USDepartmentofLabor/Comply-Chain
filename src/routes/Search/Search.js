import React, { Component } from "react";
import Highlighter from "react-highlight-words";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icons from "../../components/Icons";
import { withLanguageContext } from "../../components/Language";
import Routes from "../../modules/config/routes";
import { theme } from "../../modules/config/theme";
import { storage } from "../../modules/storage";
import { getRawTextData } from "../../modules/utils";
import { isBrowser } from "../../modules/utils/platform";
import Title from "../../components/Title/Title";
import Button from "../../components/Button";

const SearchLabel = styled.label`
    position: relative;
    color: ${theme.colors.primaryAltDarkest};
    & svg {
        content: "";
        position: relative;
        transform: translateY(40%);
        z-index: 5;
        top: 20px;
        left: 10px;
        height: 20px;
        vertical-align: bottom;
    }
`;

const SearchInput = styled.input`
    display: block;
    color: ${theme.colors.base};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.charcoal};
    padding: 10px 30px;
    width: 100%;
    box-sizing: border-box;
    appearance: none;
`;

const SearchButton = styled(Button)`
    width: 200px;
    padding: 15px;
    margin: 1rem auto 0;
    display: block;

    @media print {
        display: none;
    }
`;

const SearchResultsHeader = styled.h1`
    font-size: 17px;
    color: ${theme.colors.base};
    margin-bottom: 10px;
    & .query {
        color: ${theme.colors.primaryAltDarkest};
    }
`;

const SearchResult = styled.div`
    border: 1px solid ${theme.colors.charcoal};
    margin-top: 1em;
    padding: 0 20px 20px;
`;

const ResultHeading = styled.h2`
    font-size: 18px;
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

    componentWillMount() {
        this.timer = null;
    }

    componentDidMount() {
        const cache = storage.search.retrieveSearchCache();
        if (cache) {
            this.setState({ ...cache }, () => {
                const scrollY = storage.search.retrieveSearchScrollY() || 0;
                if (scrollY) {
                    const main = document.getElementById("main");
                    if (main) {
                        main.scrollTo(0, scrollY);
                    } else {
                        window.scrollTo(0, scrollY);
                    }
                }
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.localizor.language !== this.props.localizor.language) {
            this.handleQuery();
        }
    }

    componentWillUnmount() {
        const main = document.getElementById("main");
        storage.search.setSearchScrollY(main.scrollTop || window.scrollY);
    }

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
            this.setState(
                { results: this.search(query), searching: false },
                this.cacheResults
            );
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

        // set up steps data in a way so that when the data is searched and returned it is returned in chronological order
        const steps = [].concat.apply(
            [],
            localizor.strings.steps.map((step, stepIdx) => {
                const data = [
                    {
                        title: step.title,
                        keywords: step.keywords,
                        to: `/steps/${stepIdx + 1}`
                    },
                    {
                        title: `${step.title} - ${
                            localizor.strings.general.learningObjectives
                        }`,
                        content: step.learningObjectives.join(" "),
                        to: `/steps/${stepIdx + 1}#learning-objectives`
                    },
                    {
                        title: `${step.title} - ${
                            localizor.strings.general.keyTerms
                        }`,
                        // map through keyterms to create an array of arrays and then flatten those arrays into a single array
                        content: [].concat
                            .apply(
                                [],
                                step.keyTerms.map(keyTerm => {
                                    // return Object.values(keyTerm);
                                    // below works in IE
                                    return Object.keys(keyTerm).map(itm => keyTerm[itm]);
                                })
                            )
                            .join(" "),
                        to: `/steps/${stepIdx + 1}#key-terms`
                    }
                ];

                const topics = step.topics.map((topic, topicIdx) => {
                    return {
                        title: `${step.title} - ${topic.title}`,
                        keywords: topic.keywords,
                        content: getRawTextData(
                            topic.content().props.children
                        ).join(" "),
                        to: `/steps/${stepIdx + 1}/topic/${topicIdx + 1}`
                    };
                });
                const result = data.concat(topics);
                result.push({
                    title: `${step.title} - ${
                        localizor.strings.general.furtherResources
                    }`,
                    content:
                        step.furtherResources &&
                        getRawTextData(step.furtherResources()).join(" "),
                    to: `/steps/${stepIdx + 1}#resources`
                });
                return result;
            })
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
        return steps.concat(info);
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

    cacheResults = () => {
        storage.search.cacheSearchResults(this.state);
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
                    snippets = this.shorten(content, 120, idx);
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

    createSearchQueryUrl = (path, query) => {
        const split = path.split("#");
        const searchQuery = `?search=${query}`;

        if (split.length > 1) {
            return `${split[0]}${searchQuery}#${split[1]}`;
        }

        return `${path}${searchQuery}`;
    };

    render() {
        const { localizor } = this.props;
        const { query, results, searching } = this.state;
        let title =
            localizor.strings.general.search +
            " - Comply Chain - " +
            localizor.strings.general.dol;

        if (query && !searching) {
            title =
                localizor.strings.general.searchResultsFor +
                " " +
                query +
                " - Comply Chain - " +
                localizor.strings.general.dol;
        }
        return (
            <div>
                <Title title={title}/>
                <h1>{localizor.strings.general.search}</h1>
                {query && !searching && (
                    <SearchResultsHeader>
                       <h2> {results.length}{" "}
                        {localizor.strings.general.searchResultsFor.toLowerCase()}{" "}
                        "<span className="query">{query}</span>"</h2>
                    </SearchResultsHeader>
                )}
                <form action="." onSubmit={this.handleSubmit}>
                    <SearchLabel for="search-input">
                        <HiddenText508>Search</HiddenText508>
                        <Icons.Search
                            role="img"
                            aria-label="Search"
                            alt="Magnifying glass"
                        />
                        <SearchInput
                            id="search-input"
                            aria-label="Search Box"
                            type="search"
                            ref={input => (this.searchInput = input)}
                            placeholder={localizor.strings.general.search}
                            value={query}
                            onChange={this.handleChange}
                        />
                        <SearchButton
                            id="search-button"
                            aria-label="Search Submit"
                            variant="primary"
                            type="submit"
                        >
                            {localizor.strings.general.search}
                        </SearchButton>
                    </SearchLabel>
                </form>
                {results.map((result, i) => {
                    return (
                        <SearchResult key={`search_results_${i}`}>
                            {result.to && (
                                <ResultHeading>
                                    <h3><ResultTitle
                                        to={this.createSearchQueryUrl(
                                            result.to,
                                            query
                                        )}
                                        target={
                                            isBrowser() ? "_blank" : "_self"
                                        }
                                    >
                                        {result.title}
                                    </ResultTitle></h3>
                                </ResultHeading>
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
                            <SnippetLink
                                to={this.createSearchQueryUrl(result.to, query)}
                                target={isBrowser() ? "_blank" : "_self"}
                                aria-label={`${
                                    localizor.strings.general.continueReading
                                } ${result.title}`}
                            >
                                {localizor.strings.general.continueReading}.
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
