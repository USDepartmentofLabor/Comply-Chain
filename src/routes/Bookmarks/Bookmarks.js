import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withLanguageContext } from "../../components/Language";
import { storage } from "../../modules/storage";
import { getPropByString } from "../../modules/utils";
import styled from "styled-components";

const StyledLink = styled(Link)``;
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
