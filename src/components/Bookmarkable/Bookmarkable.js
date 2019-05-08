import PropTypes from "prop-types";
import React, { Component } from "react";
import { storage } from "../../modules/storage";
import styled from "styled-components";
import Icons from "../Icons";
import { theme } from "../../modules/config/theme";

const Wrapper = styled.div`
    position: relative;
`;

const BookmarkButton = styled.button`
    border: none;
    cursor: pointer;
    float: right;
    background: transparent;

    &:hover {
        border: none;
        background: transparent;
    }
`;

const BookmarkIcon = styled(Icons.BookmarkCheck)`
    font-size: 2em;
    color: ${props => props.color};
`;

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
            <Wrapper>
                <BookmarkButton
                    title={bookmarked ? "Unbookmark page" : "Bookmark page"}
                    onClick={this.handleBookmark}
                >
                    <BookmarkIcon
                        color={
                            bookmarked
                                ? theme.colors.primary
                                : theme.colors.base
                        }
                    />
                </BookmarkButton>
                {children}
            </Wrapper>
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
