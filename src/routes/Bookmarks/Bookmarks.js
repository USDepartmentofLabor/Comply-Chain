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
import Title from "../../components/Title/Title";

const PaddedContent = styled.div`
    padding-left: 25px;
`;

const IconWrapper = styled.button`
    color: ${theme.colors.primary};
    font-size: 2em;
    cursor: pointer;
    margin-left: 10px;
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    outline: none;
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
    font-size: 19px;
    font-weight: bold;
    font-family: ${theme.fonts.headings};
`;

const ItemTitle = styled.h3`
    padding: 0;
    margin: 0;
    font-size: 20px;
`;

const ItemContent = styled(Link)`
    color: ${theme.colors.primary};
    text-decoration: none;
    width:420px;
`;

const Item = styled.div``;

const ToastStrong = styled.span`
    font-weight: bold;
    width: 430px;
    padding: 10px;
`;
const Content = styled.div`
    display: flex;
    // width: 440px;
    align-items: center;
    justify-content: space-evenly;
    padding: 15px;
`;

const UndoButton = styled.button`
    border: none;
    background: ${theme.colors.primaryDarker};
    color: ${theme.colors.white};
    height: auto;
    width: 74px;
    padding: 15px;
    font-weight: bold;
    cursor: pointer;
`;

const UndoText = styled.span`
    font-size: 12px;
    width:250px;
    padding: 0 5 px;
`;
class ToastUndo extends Component {
    componentDidMount() {
        if (this.node) {
            this.node.focus();
        }
    }
    handleClick = () => {
        const { bookmark, undo, shouldClose, closeToast } = this.props;
        undo(bookmark);
        if (shouldClose) {
            closeToast();
        }
    };

    render() {
        const { bookmark, localizor } = this.props;
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
                    id="undo-bookmark-btn"
                    ref={node => (this.node = node)}
                    onTouchEnd={e => {
                        e.preventDefault();
                        this.handleClick();
                    }}
                    onClick={this.handleClick}
                >
                    {localizor.strings.general.undo}
                </UndoButton>
            </Content>
        );
    }
}

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
        this.lastRemovedIdx = -1;
        this.removeBookmarkBtns = [];
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
                <Title
                    title={
                        localizor.strings.general.bookmarks +
                        " - Comply Chain - " +
                        localizor.strings.general.dol
                    }
                />
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
                                ref={node =>
                                    (this.removeBookmarkBtns[i] = node)
                                }
                                aria-label="Remove bookmark"
                                onClick={() => {
                                    this.markForRemoval(bookmark, i);
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

    markForRemoval = (bookmark, i = -1) => {
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
        if (i !== -1) {
            this.lastRemovedIdx = i;
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
        if (this.lastRemovedIdx !== -1) {
            this.removeBookmarkBtns[this.lastRemovedIdx].focus();
        }
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
