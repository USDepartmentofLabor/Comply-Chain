import PropTypes from "prop-types";
import React, { Component } from "react";
import { storage } from "../../modules/storage";

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
    componentDidUpdate(prevProps) {
        if (prevProps.titleString !== this.props.titleString) {
            const bookmarked = storage.bookmarks.retrieveBookmark(
                this.props.titleString
            )
                ? true
                : false;
            this.setState({ bookmarked });
        }
    }
    handleBookmark = () => {
        const { headerTitle, titleString, titlePrefix, url } = this.props;
        const { bookmarked } = this.state;
        storage.bookmarks.toggleBookmark(
            titleString,
            titlePrefix,
            headerTitle,
            url
        );
        this.setState({ bookmarked: !bookmarked });
    };
    render() {
        const { children, pdf } = this.props;
        const { bookmarked } = this.state;
        if (pdf) {
            return children;
        }
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
    titlePrefix: PropTypes.string,
    url: PropTypes.string.isRequired,
    pdf: PropTypes.bool
};

export default Bookmarkable;
