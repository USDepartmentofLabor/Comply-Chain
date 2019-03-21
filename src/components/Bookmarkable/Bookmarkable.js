import React, { Component } from "react";
import { storage } from "../../modules/storage";

class Bookmarkable extends Component {
    constructor(props) {
        super(props);
        const bookmarked = storage.bookmarks.retrieveBookmark(this.props.title)
            ? true
            : false;
        this.state = { bookmarked };
    }
    handleBookmark = () => {
        const { title, url } = this.props;
        const { bookmarked } = this.state;
        storage.bookmarks.toggleBookmark(title, url);
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

export default Bookmarkable;
