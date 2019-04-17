import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withLanguageContext } from "../../components/Language";
import { storage } from "../../modules/storage";
import { getPropByString } from "../../modules/utils";
import styled from "styled-components";

const StyledLink = styled(Link)``;
class Bookmarks extends Component {
    constructor(props) {
        super(props);
        const bookmarks = storage.bookmarks.retrieveBookmarks();
        this.state = {
            bookmarks,
            week: [],
            month: [],
            others: [],
            bookmarksToRemove: []
        };
        const monthAgo = new Date();
        monthAgo.setMonth(monthAgo.getMonth() - 1);
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        bookmarks.map(bookmark => {
            if (weekAgo.getTime() <= bookmark.time) {
                this.state.week.push(bookmark);
            } else if (
                monthAgo.getTime() <= bookmark.time &&
                weekAgo.getTime() > bookmark.time
            ) {
                this.state.month.push(bookmark);
            } else {
                this.state.others.push(bookmark);
            }
            return bookmark;
        });
    }

    componentWillUnmount() {
        const { bookmarksToRemove } = this.state;
        bookmarksToRemove.map(bookmark => {
            storage.bookmarks.toggleBookmark(bookmark.name);
            return bookmark;
        });
    }

    renderBookmarks = bookmarks => {
        const { localizor } = this.props;
        const { bookmarksToRemove } = this.state;
        return (
            <ul>
                {bookmarks.map(bookmark => {
                    return (
                        <li key={`bookmark_${bookmark.name}`}>
                            <StyledLink to={bookmark.url}>
                                {bookmark.header && (
                                    <span>
                                        {getPropByString(
                                            localizor.strings,
                                            bookmark.header
                                        )}
                                        <br />
                                    </span>
                                )}
                                {bookmark.prefix && (
                                    <span>
                                        {getPropByString(
                                            localizor.strings,
                                            bookmark.prefix
                                        )}
                                        :{" "}
                                    </span>
                                )}
                                {getPropByString(
                                    localizor.strings,
                                    bookmark.name
                                )}
                            </StyledLink>
                            {" - "}
                            {bookmarksToRemove.indexOf(bookmark) !== -1 ? (
                                <button
                                    onClick={() => {
                                        this.unmarkForRemoval(bookmark);
                                    }}
                                >
                                    Add back
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        this.markForRemoval(bookmark);
                                    }}
                                >
                                    Remove
                                </button>
                            )}
                        </li>
                    );
                })}
            </ul>
        );
    };

    markForRemoval = bookmark => {
        const { bookmarksToRemove } = this.state;
        bookmarksToRemove.push(bookmark);
        this.setState({ bookmarksToRemove });
    };

    unmarkForRemoval = bookmark => {
        const { bookmarksToRemove } = this.state;
        const idx = bookmarksToRemove.indexOf(bookmark);
        if (idx !== -1) {
            bookmarksToRemove.splice(idx, 1);
        }
        this.setState({ bookmarksToRemove });
    };
    render() {
        const { bookmarks, week, month, others } = this.state;
        return (
            <div>
                {bookmarks.length === 0 && <span>No bookmarks!</span>}
                {bookmarks.length > 0 && (
                    <ul>
                        <li>
                            <span>Within a week</span>
                            {this.renderBookmarks(week)}
                        </li>
                        <li>
                            <span>Within a month</span>
                            {this.renderBookmarks(month)}
                        </li>
                        <li>
                            <span>Over a month</span>
                            {this.renderBookmarks(others)}
                        </li>
                    </ul>
                )}
            </div>
        );
    }
}

Bookmarks.propTypes = {
    localizor: PropTypes.object.isRequired
};

export default withLanguageContext(Bookmarks);
