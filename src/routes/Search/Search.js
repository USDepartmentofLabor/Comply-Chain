import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withLanguageContext } from "../../common/Language";
import Routes from "../../modules/config/routes";
import { getRawTextData } from "../../modules/utils";

const WAIT_INTERVAL = 1000;

class Search extends Component {
    state = { query: "", results: [] };

    handleChange = e => {
        const value = e.target.value;
        this.setState({ query: value });
        clearTimeout(this.timer);
        this.timer = setTimeout(this.finish, WAIT_INTERVAL);
    };

    finish = () => {
        this.handleQuery();
    };

    handleQuery = () => {
        const { query } = this.state;
        if (query.length > 2) {
            this.setState({ results: this.search(query) });
        } else {
            this.setState({ results: [] });
        }
    };

    search = query => {
        const data = this.setupData();
        const pattern = new RegExp(query, "i");
        const filteredData = data.filter(val => this.filterData(val, pattern));

        const results = filteredData.map(item => {
            if (item.content) {
                const snippets = item.content
                    .filter(contentItem => pattern.test(contentItem))
                    .map(val => {
                        const idx = val.indexOf(query);
                        if (idx !== -1) {
                            return this.shorten(val, 100);
                        }
                        return null;
                    });

                return { ...item, snippets };
            }

            return item;
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
                getRawTextData(step.furtherResources()),
            to: `/steps/${i + 1}#resources`
        }));
        const learningObjectives = localizor.strings.steps.map((step, i) => ({
            title: `${step.title} - Learning Objectives`,
            content: step.learningObjectives,
            to: `/steps/${i + 1}#learning-objectives`
        }));
        const keyTerms = localizor.strings.steps.map((step, i) => ({
            title: `${step.title} - Key Terms`,
            // map through keyterms to create an array of arrays and then flattem those arrays into a single array
            content: [].concat.apply(
                [],
                step.keyTerms.map(keyTerm => {
                    return Object.values(keyTerm);
                })
            ),
            to: `/steps/${i + 1}#key-terms`
        }));

        const topics = localizor.strings.steps.map((step, stepIdx) =>
            step.topics.map((topic, topicIdx) => ({
                title: topic.title,
                keywords: topic.keywords,
                content: getRawTextData(topic.content().props.children),
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
                content: getRawTextData(item.content().props.children),
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
                (accum, item) => accum || this.filterData(item, query),
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

    /**
     * Shortens a string up to a maximum length
     * or up to the last index of the given separator
     * in order to not cut off a string in the middle of a word.
     */
    shorten = (str, maxLen, separator = " ") => {
        if (str.length <= maxLen) return str;
        return str.substr(0, str.lastIndexOf(separator, maxLen));
    };

    componentWillMount() {
        this.timer = null;
    }

    render() {
        const { query, results } = this.state;
        return (
            <div>
                <label>Search</label>
                <input value={query} onChange={this.handleChange} />
                {results.map((result, i) => {
                    return (
                        <div key={`search_results_${i}`}>
                            {result.to && (
                                <Link to={result.to} target="_blank">
                                    {result.title}
                                </Link>
                            )}
                            <div>
                                {result.snippets &&
                                    result.snippets
                                        .slice(0, 2)
                                        .map((contentItem, j) => {
                                            if (
                                                typeof contentItem === "string"
                                            ) {
                                                return (
                                                    <p
                                                        key={`snippet_${i}_${j}`}
                                                    >
                                                        {contentItem}...
                                                    </p>
                                                );
                                            }
                                            return null;
                                        })}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default withLanguageContext(Search);
