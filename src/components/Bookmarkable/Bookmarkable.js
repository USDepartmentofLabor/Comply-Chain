import PropTypes from "prop-types";
import React, { Component } from "react";
import { storage } from "../../modules/storage";
import styled from "styled-components";
import Icons from "../Icons";
import { toast, cssTransition } from "react-toastify";
import { theme } from "../../modules/config/theme";
import { withLanguageContext } from "../Language";
import { getPropByString } from "../../modules/utils";
import Title from "../Title/Title";

const Wrapper = styled.div`
    position: relative;
`;

const BookmarkButton = styled.button`
    border: none;
    cursor: pointer;
    float: right;
    background: transparent;
    margin-top: -10px;
    &:hover {
        border: none;
        background: transparent;
    }

    @media print {
        display: none;
    }
`;

const BookmarkIcon = styled(Icons.BookmarkCheck)`
    font-size: 2.5em;
    color: ${props => props.color};
    overflow: visible;
`;

const ToastStrong = styled.span`
    font-weight: bold;
    width: 330px;
    padding: 10px;
`;


const ToastUndo = ({ name, localizor, undo, closeToast }) => {
    const handleClick = () => {
        undo();
        closeToast();
    };

    const Content = styled.div`
        display: flex;
        align-items: center;
        // width: 300px;
        // justify-content: space-evenly;
        padding: 5px;
        left: 50px;
        width: 280px;
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
        width: 180px;
        font-size: 12px;
        padding: 0 5px;
    `;

    return (
        <Content>
            <UndoText>
                {localizor.strings.general.bookmarked}{""}
                <ToastStrong>
                    {getPropByString(localizor.strings, name)}
                </ToastStrong>

            </UndoText>{" "}
            <UndoButton
                onTouchEnd={e => {
                    e.preventDefault();
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

class Bookmarkable extends Component {
    constructor(props) {
        super(props);
        const bookmarked = storage.bookmarks.retrieveBookmark(
            this.props.titleString
        )
            ? true
            : false;
        this.state = { bookmarked };
        this.toastId = "bookmarkableToast";
    }
     componentWillMount() {
            document.addEventListener("keydown", this.handleKeyPress, false);
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
    displayToast = () => {
        const { titleString, localizor } = this.props;
        clearTimeout(this.toastTimer);

        if (toast.isActive(this.toastId)) {
            toast.update(this.toastId, {
                render: (
                    <ToastUndo
                        undo={this.handleBookmark}
                        localizor={localizor}
                        name={titleString}
                        aria-hidden={true}
                    />
                )
            });
        } else {
            toast(
                <ToastUndo
                    undo={this.handleBookmark}
                    localizor={localizor}
                    name={titleString}
                />,
                {
                    toastId: this.toastId,
                    transition: Slide
                }
            );
        }
        this.toastTimer = setTimeout(() => {
            toast.dismiss(this.toastId);
        }, 5000);
    };

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
        const { localizor, titleString, children } = this.props;
        const { bookmarked } = this.state;
        const title =
            getPropByString(localizor.strings, titleString);
        return (
            <Wrapper>
                <BookmarkButton aria-live="assertive"
                    title={
                        bookmarked ? `${title} is Bookmarked To undo Bookmark Press Enter ` : `Bookmark ${title}`
                    }
                    onClick={() => {
                        if (!bookmarked) {
                            this.displayToast();
                        } else {
                            toast.dismiss(this.toastId);
                        }
                        this.handleBookmark();
                    }}
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
    localizor: PropTypes.object.isRequired
};

export default withLanguageContext(Bookmarkable);
