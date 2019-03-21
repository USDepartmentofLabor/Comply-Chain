import React, { Component } from "react";
import { storage } from "../../modules/storage";
import { Link } from "react-router-dom";

class Bookmarks extends Component {
    render() {
        const bookmarks = storage.bookmarks.retrieveBookmarks();
        return (
            <div>
                {bookmarks.length === 0 && <span>No bookmarks!</span>}
                {bookmarks.length > 0 && (
                    <ul>
                        {bookmarks.map(bookmark => {
                            return (
                                <li key={`bookmark_${bookmark.name}`}>
                                    <Link to={bookmark.url}>
                                        {bookmark.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        );
    }
}

export default Bookmarks;
