import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast, cssTransition } from "react-toastify";
import styled from "styled-components";
import Icons from "../../components/Icons";
import { withLanguageContext } from "../../components/Language";
import { theme } from "../../modules/config/theme";
import { storage } from "../../modules/storage";
import { getPropByString } from "../../modules/utils";

const PaddedContent = styled.div`
    padding-left: 25px;
`;

const IconWrapper = styled.div`
    color: ${theme.colors.primary};
    font-size: 2em;
    cursor: pointer;
    margin-left: 10px;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${theme.colors.grayLight};
    padding: 20px 10px;
    margin-top: 1em;
`;

const BookmarkIcon = styled(Icons.BookmarkCheck)`
    display: block;
    overflow: visible;
`;

const ItemHeader = styled.span`
    font-size: 14px;
    font-weight: bold;
`;

const ItemTitle = styled.h3`
    padding: 0;
    margin: 0;
    font-size: 18px;
`;

const ItemContent = styled(Link)`
    color: ${theme.colors.primary};
    text-decoration: none;
`;

const Item = styled.div``;

const ToastStrong = styled.span`
    font-weight: bold;
`;

const ToastUndo = ({ bookmark, localizor, undo, shouldClose, closeToast }) => {
    const handleClick = () => {
        undo(bookmark);
        if (shouldClose) {
            closeToast();
        }
    };

    const Content = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding: 15px;
    `;

    const UndoButton = styled.button`
        border: none;
        background: ${theme.colors.primaryDarker};
        color: ${theme.colors.white};
        height: auto;
        padding: 15px;
        font-weight: bold;
        cursor: pointer;
    `;

    const UndoText = styled.span`
        font-size: 12px;
        padding: 0 5px;
    `;

    return (
        <Content>
            <UndoText>
                {localizor.strings.general.removed}{" "}
                <ToastStrong>
                    {getPropByString(localizor.strings, bookmark.name)}
                </ToastStrong>{" "}
                {localizor.strings.general.fromBookmarks}.
            </UndoText>{" "}
            <UndoButton
                onTouchStart={() => {
                    handleClick();
                }}
                onClick={handleClick}
            >
                {localizor.strings.general.undo}
            </UndoButton>
        </Content>
    );
};

const Slide = cssTransition({
    enter: "Toastify__slide-enter",
    exit: "Toastify__slide-exit",
    duration: [450, 750],
    appendPosition: true
});

class Bookmarks extends Component {
    constructor(props) {
        super(props);
        const bookmarks = storage.bookmarks.retrieveBookmarks();
        this.state = {
            bookmarks,
            bookmarksToRemove: []
        };
        this.toastId = "bookmarkToast";
    }

    componentWillUnmount() {
        const { bookmarksToRemove } = this.state;
        this.removeBookmarks(bookmarksToRemove);
    }

    removeBookmarks = bookmarksToRemove => {
        if (bookmarksToRemove) {
            bookmarksToRemove.map(bookmark => {
                storage.bookmarks.removeBookmark(bookmark.name);
                return bookmark;
            });
        }
    };

    renderBookmarks = bookmarks => {
        const { localizor } = this.props;
        const { bookmarksToRemove } = this.state;

        const filtered = bookmarks.filter(
            bookmark => !bookmarksToRemove.includes(bookmark)
        );
        return (
            <div>
                {filtered.map((bookmark, i) => {
                    return (
                        <IconContainer
                            id={`bookmark_${i + 1}`}
                            key={`bookmark_${i + 1}`}
                        >
                            <Item>
                                <PaddedContent>
                                    {bookmark.header && (
                                        <ItemHeader>
                                            {getPropByString(
                                                localizor.strings,
                                                bookmark.header
                                            )}
                                        </ItemHeader>
                                    )}
                                    <ItemContent to={bookmark.url}>
                                        <ItemTitle>
                                            {getPropByString(
                                                localizor.strings,
                                                bookmark.name
                                            )}
                                        </ItemTitle>
                                    </ItemContent>
                                </PaddedContent>
                            </Item>
                            <IconWrapper
                                onClick={() => {
                                    this.markForRemoval(bookmark);
                                }}
                            >
                                <BookmarkIcon />
                            </IconWrapper>
                        </IconContainer>
                    );
                })}
                {filtered.length === 0 && (
                    <p>{localizor.strings.general.nobookmarks}.</p>
                )}
            </div>
        );
    };

    markForRemoval = bookmark => {
        const { bookmarksToRemove } = this.state;
        bookmarksToRemove.push(bookmark);
        this.setState({ bookmarksToRemove });
        storage.bookmarks.removeBookmark(bookmark.name);
        const toastComp = (
            <ToastUndo
                undo={this.unmarkForRemoval}
                localizor={this.props.localizor}
                bookmark={bookmark}
            />
        );

        if (toast.isActive(this.toastId)) {
            toast.update(this.toastId, {
                render: toastComp
            });
        } else {
            toast(toastComp, {
                toastId: this.toastId,
                transition: Slide
            });
        }

        clearTimeout(this.undoTimer);
        this.undoTimer = setTimeout(() => {
            toast.dismiss(this.toastId);
        }, 5000);
    };

    unmarkForRemoval = bookmark => {
        const { bookmarksToRemove } = this.state;
        const idx = bookmarksToRemove.indexOf(bookmark);
        if (idx !== -1) {
            bookmarksToRemove.splice(idx, 1);
        }
        this.setState({ bookmarksToRemove });
        storage.bookmarks.toggleBookmark(
            bookmark.name,
            bookmark.prefix,
            bookmark.header,
            bookmark.url
        );
        if (bookmarksToRemove.length > 0) {
            clearTimeout(this.undoTimer);
            const prevBookmark =
                bookmarksToRemove[bookmarksToRemove.length - 1];
            toast.update(this.toastId, {
                render: (
                    <ToastUndo
                        undo={this.unmarkForRemoval}
                        localizor={this.props.localizor}
                        bookmark={prevBookmark}
                        shouldClose={bookmarksToRemove.length === 1}
                    />
                )
            });
        } else {
            toast.dismiss(this.toastId);
        }
    };

    render() {
        const { bookmarks } = this.state;
        const { localizor } = this.props;
        return (
            <div>
                <h4>{localizor.strings.general.bookmarks}</h4>
                {bookmarks.length === 0 && (
                    <p>{localizor.strings.general.nobookmarks}.</p>
                )}
                {bookmarks.length > 0 && (
                    <div>{this.renderBookmarks(bookmarks)}</div>
                )}
            </div>
        );
    }
}

Bookmarks.propTypes = {
    localizor: PropTypes.object.isRequired
};

export default withLanguageContext(Bookmarks);
