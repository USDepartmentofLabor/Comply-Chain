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

const ItemHeaderTitle = styled.h2`
    margin: 0;
`;

const ItemHeader = styled.span`
    font-weight: bold;
    font-family: ${theme.fonts.headings};
`;

const ItemTitle = styled.h2`
    padding: 0;
    margin: 0;
`;

const ItemContent = styled.a`
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
    align-items: center;
    justify-content: space-evenly;
    padding: 5px;
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
    width:180px;
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
                    {localizor.strings.general.removed}{""}
                    <ToastStrong>
                        {getPropByString(localizor.strings, bookmark.name)}
                    </ToastStrong>{""}
                    {localizor.strings.general.fromBookmarks}.
                </UndoText>{""}
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

        // TODO: Get rid of storage debug code.
        // TODO: Add characters per second.
        // TODO: Change timeout to 20 seconds.
        storage.bookmarks.removeAllBookmarks();
        storage.bookmarks.getTestBookmarks();
        const bookmarks = storage.bookmarks.retrieveBookmarks();

        this.charactersPerSecondEnglish = 10;
        this.standardCharactersReadFromButton = 190;
        this.timeoutTimeSeconds = 5;
        this.useTimeoutTimeSeconds = true;

        let tags = new EnhancedBookmarks();
        tags.initEnhancedBookmarks(bookmarks);

        this.state = {
            tags,
            bookmarks,
            bookmarksToRemove: [],
        };
        this.toastId = "bookmarkToast";
    }

    componentWillUnmount() {
        const { tags, bookmarksToRemove } = this.state;
        this.removeBookmarks(tags.bookmarksNotOnPage)
    }

    removeBookmarks = bookmarksNotOnPage => {
        if (bookmarksNotOnPage) {
            bookmarksNotOnPage.map(bookmark => {
                storage.bookmarks.removeBookmark(bookmark.name);
                return bookmark;
            });
        }
    };

    renderBookmarks = tags => {
        const { localizor } = this.props;
        const { bookmarksToRemove } = this.state;

        return (
            <div>
                <Title
                    title={
                        localizor.strings.general.bookmarks +
                        " - Comply Chain - " +
                        localizor.strings.general.dol
                    }
                />
                {tags.bookmarksOnPage.map((bookmark, i) => {
                    return (
                        <IconContainer
                            id={`bookmark_${bookmark.name}`}
                            key={`bookmark_${bookmark.name}`}
                        >
                            <Item>
                                <PaddedContent>
                                    {bookmark.header && (
                                        <ItemHeaderTitle>
                                            <ItemHeader>
                                                {getPropByString(localizor.strings, bookmark.header)}
                                            </ItemHeader>
                                        </ItemHeaderTitle>
                                    )}
                                    <ItemContent
                                        href={bookmark.url}
                                        ref={node => (bookmark.titleRef = node)}
                                    >
                                        <ItemTitle>
                                            {getPropByString(localizor.strings, bookmark.name)}
                                        </ItemTitle>
                                    </ItemContent>
                                </PaddedContent>
                            </Item>
                            <IconWrapper
                                ref={node => (bookmark.iconRef = node)}
                                aria-label="Remove bookmark"
                                onClick={() => {this.markForRemoval(bookmark, i);}}
                            >
                                <BookmarkIcon/>
                            </IconWrapper>
                        </IconContainer>
                    );
                })}
                {tags.bookmarksOnPage.length === 0 && (
                    <p>{localizor.strings.general.nobookmarks}.</p>
                )}
            </div>
        );
    };

    markForRemoval = (bookmark, i = -1) => {
        const { localizor } = this.props;
        const { tags, bookmarksToRemove } = this.state;

        // Move bookmark from onPage to notOnPage and delete from storage.
        tags.removeBookmarkByName('bookmarksOnPage', bookmark.name);
        tags.toggleLastRemovedBookmark(bookmark.name);
        tags.addBookmarkAtEnd('bookmarksNotOnPage', bookmark);
        storage.bookmarks.removeBookmark(bookmark.name);

        bookmarksToRemove.push(bookmark);

        this.setState({ tags, bookmarksToRemove });

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
        const bookmarkTitle = getPropByString(localizor.strings, bookmark.name);
        const totalCharactersToRead = bookmarkTitle.length + this.standardCharactersReadFromButton;
        const readTimeInSeconds = totalCharactersToRead / this.charactersPerSecondEnglish;
        this.timeoutHandler(readTimeInSeconds);
    };

    timeoutHandler = (timeInSeconds) => {
        clearTimeout(this.undoTimer);
        const seconds =  this.useTimeoutTimeSeconds ? this.timeoutTimeSeconds : timeInSeconds;
        this.undoTimer = setTimeout(() => {
            toast.dismiss(this.toastId);
            this.setBookmarkTitleFocus();
        }, seconds*1000);
    };

    setBookmarkTitleFocus() {
        const { tags } = this.state;
        // Create a deep copy.
        const tempBookmark = tags.getFirstOnPageBookmarkFromBookmarks();
        let firstOnPageBookmarkFromBookmarks = Object.assign({}, tempBookmark);
        const lastRemovedBookmark = tags.getBookmarkAtEnd('bookmarksNotOnPage');
        const nextBookmarkOnPage = tags.getNextBookmarkOnPage(lastRemovedBookmark);
        // Try the next bookmark, if that has no reference default to first bookmark on page.
        if (nextBookmarkOnPage && nextBookmarkOnPage.titleRef) {
            nextBookmarkOnPage.titleRef.focus();
        }
        else if (firstOnPageBookmarkFromBookmarks && firstOnPageBookmarkFromBookmarks.titleRef) {
            firstOnPageBookmarkFromBookmarks.titleRef.focus();
        }
    }

    unmarkForRemoval = bookmark => {
        const { tags, bookmarksToRemove } = this.state;
        // Toggle the lastRemoved.
        tags.toggleLastRemovedBookmark(bookmark.name);
        // Remove the bookmark for removal (unmark).
        tags.removeBookmarkByName('bookmarksNotOnPage', bookmark.name);
        // Find where it was in the original list: put back in same place on page.
        tags.placeAtCorrectIndexOnPage(bookmark);
        this.setState({ tags, bookmarksToRemove });
        // Adds the removed bookmark back to storage.
        storage.bookmarks.toggleBookmark(
            bookmark.name,
            bookmark.prefix,
            bookmark.header,
            bookmark.url
        );
        if (tags.bookmarksNotOnPage.length > 0) {
            clearTimeout(this.undoTimer);
            const prevBookmark = tags.getBookmarkAtEnd('bookmarksNotOnPage');
            toast.update(this.toastId, {
                render: (
                    <ToastUndo
                        undo={this.unmarkForRemoval}
                        localizor={this.props.localizor}
                        bookmark={prevBookmark}
                        shouldClose={tags.bookmarksNotOnPage.length === 1}
                    />
                )
            });
        } else {
            toast.dismiss(this.toastId);
        }
    };

    render() {
        const { tags, bookmarks } = this.state;
        const { localizor } = this.props;
        return (
            <div>
                <h1>{localizor.strings.general.bookmarks}</h1>
                {bookmarks.length === 0 && (<p>{localizor.strings.general.nobookmarks}.</p>)}
                {bookmarks.length > 0 && (<div>{this.renderBookmarks(tags)}</div>)}
            </div>
        );
    }
}

Bookmarks.propTypes = {
    localizor: PropTypes.object.isRequired
};

class EnhancedBookmarks {

    bookmarks = [];
    bookmarksOnPage = [];
    bookmarksNotOnPage = [];

    createEnhancedBookmark = (bookmark, i, titleRef=null, iconRef=null, lastRemoved=false) => ({
        "name": bookmark.name,
        "url": bookmark.url,
        "prefix": bookmark.prefix,
        "header": bookmark.header,
        "time": bookmark.time,
        "titleRef": titleRef,
        "iconRef": iconRef,
        "listIndex": i,
        "lastRemoved": lastRemoved
    });

    initEnhancedBookmarks = (bookmarks, i) => {
        for (const [index, bookmark] of bookmarks.entries()) {
            let enhancedBookmark = this.createEnhancedBookmark(bookmark, index);
            this.bookmarks.push(enhancedBookmark);
            this.bookmarksOnPage.push(enhancedBookmark)
        }
    };

    getFirstOnPageBookmarkFromBookmarks = () => {
        for (const bookmark of this.bookmarks) {
            for (const bookmarkOnPage of this.bookmarksOnPage) {
                if (bookmark.name === bookmarkOnPage.name) {
                    return bookmark;
                }
            }
        }
        return null;
    };

    getBookmarkObjectByName = (arrayName, name) => {
        if (arrayName === 'bookmarks') {
            return this.bookmarks.find((bookmark) => bookmark.name === name);
        } else if (arrayName === 'bookmarksOnPage') {
            return this.bookmarksOnPage.find((bookmark) => bookmark.name === name);
        } else if (arrayName === 'bookmarksNotOnPage') {
            return this.bookmarksNotOnPage.find((bookmark) => bookmark.name === name);
        }
    };

    getBookmarkIndexByName = (arrayName, name) => {
        if (arrayName === 'bookmarks') {
            return this.bookmarks.findIndex((bookmark) => bookmark.name === name);
        } else if (arrayName === 'bookmarksOnPage') {
            return this.bookmarksOnPage.findIndex((bookmark) => bookmark.name === name);
        } else if (arrayName === 'bookmarksNotOnPage') {
            return this.bookmarksNotOnPage.findIndex((bookmark) => bookmark.name === name);
        }
    };

    getBookmarkAtEnd = (arrayName) => {
        let bookmark = [];
        if (arrayName === 'bookmarks') {
            bookmark = this.bookmarks.slice(-1);
        } else if (arrayName === 'bookmarksOnPage') {
            bookmark = this.bookmarksOnPage.slice(-1);
        } else if (arrayName === 'bookmarksNotOnPage') {
            bookmark = this.bookmarksNotOnPage.slice(-1);
        }
        if (bookmark.length > 0) {
            return bookmark[0]
        } else {
            return null;
        }
    };

    removeBookmarkByName = (arrayName, name) => {
        if (arrayName === 'bookmarks') {
            this.bookmarks = this.bookmarks.filter(bookmark => bookmark.name !== name);
        } else if (arrayName === 'bookmarksOnPage') {
            this.bookmarksOnPage = this.bookmarksOnPage.filter(bookmark => bookmark.name !== name);
        } else if (arrayName === 'bookmarksNotOnPage') {
            this.bookmarksNotOnPage = this.bookmarksNotOnPage.filter(bookmark => bookmark.name !== name);
        }
    };

    addBookmarkAtEnd = (arrayName, bookmark) => {
        if (arrayName === 'bookmarks') {
            this.bookmarks.push(bookmark);
        } else if (arrayName === 'bookmarksOnPage') {
            this.bookmarksOnPage.push(bookmark);
        } else if (arrayName === 'bookmarksNotOnPage') {
            this.bookmarksNotOnPage.push(bookmark);
        }
    };

    addBookmarkAtBeginning = (arrayName, bookmark) => {
        if (arrayName === 'bookmarks') {
            this.bookmarks.unshift(bookmark);
        } else if (arrayName === 'bookmarksOnPage') {
            this.bookmarksOnPage.unshift(bookmark);
        } else if (arrayName === 'bookmarksNotOnPage') {
            this.bookmarksNotOnPage.unshift(bookmark);
        }
    };

    toggleLastRemovedBookmark = (name) => {
        const bookmark = this.bookmarks.filter(bookmark => bookmark.lastRemoved === true);
        if (bookmark.length > 0) {
            const indexPrevious = this.getBookmarkIndexByName('bookmarks', bookmark[0].name);
            if (indexPrevious !== -1) {
                this.bookmarks[indexPrevious].lastRemoved = false;
            }
        }
        const indexPrevious = this.getBookmarkIndexByName('bookmarks', bookmark.name);
        if (indexPrevious !== -1) {
            this.bookmarks[indexPrevious].lastRemoved = false;
        }
        const indexCurrent = this.getBookmarkIndexByName('bookmarks', name);
        this.bookmarks[indexCurrent].lastRemoved = true;
    };

    placeAtCorrectIndexOnPage = (thisBookmark) => {
        const bookmarkIndex = thisBookmark.listIndex;
        const indexes = [];
        for (const bookmark of this.bookmarksOnPage) {
            indexes.push(bookmark.listIndex)
        }
        const length = indexes.length;
        if (length === 0) {
            this.bookmarksOnPage.push(thisBookmark);
            return;
        } else if (bookmarkIndex < indexes[0]) {
            this.bookmarksOnPage.unshift(thisBookmark);
            return;
        } else if (bookmarkIndex > indexes[length-1]) {
            this.bookmarksOnPage.push(thisBookmark);
            return;
        }
        for (let i = 1; i <= length-1; i++) {
            if (bookmarkIndex < indexes[i]) {
                this.bookmarksOnPage.splice(i, 0, thisBookmark);
                return;
            }
        }
    };

    getNextBookmarkOnPage = bookmark => {
        if (!bookmark) {
            bookmark = this.bookmarks.filter(bookmark => bookmark.lastRemoved === true);
            if (bookmark.length <= 0) {
                return null;
            }
            else {
                return bookmark[0];
            }
        }
        const bookmarksOnPage = this.bookmarksOnPage;
        const bookmarksNotOnPage = this.bookmarksNotOnPage;
        // Find where the removed bookmark is in the list.
        const indexBookmarkInList = this.getBookmarkIndexByName('bookmarks', bookmark.name);
        // Now slice the list to get all the bookmarks after it.
        const possibleBookmarksFromList = this.bookmarks.slice(indexBookmarkInList+1);
        // Get the first bookmark that is visible.
        for (let [index, bookmark] of possibleBookmarksFromList.entries()) {
            if (!(bookmark in bookmarksNotOnPage)) {return bookmark;}
        }
        // Fell off the earth: try taking the first on the page
        if (bookmarksOnPage.length > 0) {
            const firstBookmark = bookmarksOnPage[0];
            let bookmark = this.getBookmarkIndexByName('bookmarks', firstBookmark.name);
            firstBookmark.titleRef = bookmark.titleRef;
            return firstBookmark;
        }
        // No bookmarks on page.
        return null;
    };

}

export default withLanguageContext(Bookmarks);
