import React, { Component } from "react";
import { storage } from "../../modules/storage";
import { Link } from "react-router-dom";
import { getPropByString } from "../../modules/utils";
import { withLanguageContext } from "../../components/Language";
import PropTypes from "prop-types";

class Bookmarks extends Component {
    render() {
        const { localizor } = this.props;
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
                                        {getPropByString(
                                            localizor.strings,
                                            bookmark.name
                                        )}
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

Bookmarks.propTypes = {
    localizor: PropTypes.object.isRequired
};

export default withLanguageContext(Bookmarks);
