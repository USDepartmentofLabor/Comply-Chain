import React, { Component } from "react";
import { storage } from "../../modules/storage";
import PropTypes from "prop-types";

class Bookmarkable extends Component {
    constructor(props) {
        super(props);
        const bookmarked = storage.bookmarks.retrieveBookmark(
            this.props.titleString
        )
            ? true
            : false;
        this.state = { bookmarked };
    }
    handleBookmark = () => {
        const { titleString, url } = this.props;
        const { bookmarked } = this.state;
        storage.bookmarks.toggleBookmark(titleString, url);
        this.setState({ bookmarked: !bookmarked });
    };
    render() {
        const { children } = this.props;
        const { bookmarked } = this.state;
        return (
            <div>
                <button onClick={this.handleBookmark}>
                    {bookmarked ? "Unbookmark" : "Bookmark"}
                </button>
                {children}
            </div>
        );
    }
}

Bookmarkable.propTypes = {
    titleString: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default Bookmarkable;
