import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icons from "../../components/Icons";
import { withLanguageContext } from "../../components/Language";
import Routes from "../../modules/config/routes";
import { theme } from "../../modules/config/theme";
import { storage } from "../../modules/storage";
import { isIOS } from "../../modules/utils/platform";
import homeBasics from "../../static/images/home_basics.jpg";
import homeStep1 from "../../static/images/home_step_1.jpg";
import homeStep2 from "../../static/images/home_step_2.jpg";
import homeStep3 from "../../static/images/home_step_3.jpg";
import homeStep4 from "../../static/images/home_step_4.jpg";
import homeStep5 from "../../static/images/home_step_5.jpg";
import homeStep6 from "../../static/images/home_step_6.jpg";
import homeStep7 from "../../static/images/home_step_7.jpg";
import homeStep8 from "../../static/images/home_step_8.jpg";
import homeStep9 from "../../static/images/home_step_9.jpg";
import homeStep10 from "../../static/images/home_step_10.jpg";
import homeWhyDevelop from "../../static/images/home_why_develop.jpg";

class Home extends Component {
    render() {
        const { localizor } = this.props;
        return (
            <HomeWrapper>
                <IconContainer>
                    <HomePageTitle>
                        {localizor.strings.general.home}
                    </HomePageTitle>
                    <Item
                        image={infoImageData[0].image}
                        imageMobilePosition={infoImageData[0].mobile}
                        imageDesktopPosition={infoImageData[0].desktop}
                    >
                        <ItemContentFirstTwoLinks>
                            <h2>
                                <ItemTitle
                                    id="home_whydeveloper"
                                    to={Routes.WhyDevelop.path}
                                >
                                    {localizor.strings.info.whyDevelop.title}
                                </ItemTitle>
                            </h2>
                        </ItemContentFirstTwoLinks>
                    </Item>
                    <StatusIcons>
                        {storage.bookmarks.retrieveBookmark(
                            `info.whyDevelop.title`
                        ) && <BookmarkIcon />}
                    </StatusIcons>
                </IconContainer>
                <IconContainer>
                    <Item
                        red={true}
                        image={infoImageData[1].image}
                        imageMobilePosition={infoImageData[1].mobile}
                        imageDesktopPosition={infoImageData[1].desktop}
                    >
                        <ItemContentFirstTwoLinks>
                            <h2>
                                <ItemTitle
                                    id="home_basics"
                                    to={Routes.Basics.path}
                                >
                                    {localizor.strings.info.basics.title}
                                </ItemTitle>
                            </h2>
                        </ItemContentFirstTwoLinks>
                    </Item>
                    <StatusIcons>
                        {storage.bookmarks.retrieveBookmark(
                            `info.basics.title`
                        ) && <BookmarkIcon />}
                    </StatusIcons>
                </IconContainer>

                {localizor.strings.steps.map((step, i) => {
                    const bookmarked = storage.bookmarks.containsBookmarks(
                        `steps.${i}`
                    );
                    const complete = storage.steps.isStepComplete(i);
                    return (
                        <IconContainer
                            id={`home_step_${i + 1}`}
                            key={`home_step_${i + 1}`}
                        >
                            <Item
                                red={i % 2 !== 0}
                                image={stepImageData[i].image}
                                imageMobilePosition={stepImageData[i].mobile}
                                imageDesktopPosition={stepImageData[i].desktop}
                            >
                                <ItemContent
                                    bookmarked={bookmarked}
                                    complete={complete}
                                >
                                    <FlexContent>
                                        <Icon>
                                            <Icons.StepIcon
                                                step={i + 1}
                                                alt="Step icon"
                                            />
                                        </Icon>
                                        <PaddedTitle>
                                            <h2>
                                                <ItemTitle
                                                    to={`/steps/${i + 1}`}
                                                >
                                                    {step.title}
                                                </ItemTitle>
                                            </h2>
                                        </PaddedTitle>
                                    </FlexContent>
                                </ItemContent>
                            </Item>
                            <StatusIcons>
                                {bookmarked && (
                                    <BookmarkIcon alt={"Bookmarked"} />
                                )}
                                {complete && <CheckIcon alt="Complete" />}
                            </StatusIcons>
                        </IconContainer>
                    );
                })}
            </HomeWrapper>
        );
    }
}

const infoImageData = [
    {
        image: homeWhyDevelop,
        mobile: {
            x: 50,
            y: 20
        },
        desktop: { x: 50, y: 35 }
    },
    {
        image: homeBasics,
        mobile: {
            x: 50,
            y: 25
        },
        desktop: { x: 50, y: 25 }
    }
];

const stepImageData = [
    {
        image: homeStep1,
        mobile: {
            x: 50,
            y: 20
        },
        desktop: { x: 50, y: 35 }
    },
    {
        image: homeStep2,
        mobile: {
            x: 50,
            y: 25
        },
        desktop: { x: 50, y: 25 }
    },
    {
        image: homeStep3,
        mobile: {
            x: 50,
            y: 30
        },
        desktop: { x: 50, y: 40 }
    },
    {
        image: homeStep4,
        mobile: {
            x: 50,
            y: 25
        },
        desktop: { x: 50, y: 35 }
    },
    {
        image: homeStep5,
        mobile: {
            x: 50,
            y: 35
        },
        desktop: { x: 50, y: 33 }
    },
    {
        image: homeStep6,
        mobile: {
            x: 50,
            y: 25
        },
        desktop: { x: 50, y: 25 }
    },
    {
        image: homeStep7,
        mobile: {
            x: 50,
            y: 20
        },
        desktop: { x: 50, y: 28 }
    },
    {
        image: homeStep8,
        mobile: {
            x: 50,
            y: 0
        },
        desktop: { x: 50, y: 18 }
    },
    {
        image: homeStep9,
        mobile: {
            x: 50,
            y: 60
        },
        desktop: { x: 50, y: 30 }
    },
    {
        image: homeStep10,
        mobile: {
            x: 50,
            y: 0
        },
        desktop: { x: 50, y: 18 }
    }

];

const HomePageTitle = styled.h1`
    font-weight: bold;
    font-family: ${theme.fonts.headings};
    font-size: 20px;
    color: ${theme.colors.primary};
    margin: auto;
    text-align: center;
    padding-top: 25px;
    padding-bottom: 25px;
`;

const HomeWrapper = styled.div`
    @media screen and (min-width: 900px) {
        margin: -1.8em -10px -0.8em;
        width: auto;
    }

    @media screen and (max-width: 899px) {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
`;

const FlexContent = styled.div`
    display: flex;
    align-items: flex-end;
    align-items: center;
`;

const PaddedTitle = styled.span`
    padding-left: 25px;
    padding-bottom: 25px;
`;

const Icon = styled.span`
    color: ${theme.colors.white};
    font-size: 2.5em;
    margin-bottom: -10px;
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    @media print {
        page-break-inside: avoid;
    }
`;

const StatusIcons = styled.div`
    position: absolute;
    top: 8px;
    right: 16px;
    color: ${theme.colors.white};
    font-size: 1.5em;

    & > :not(:last-child) {
        padding-right: 8px;
    }
`;

const CheckIcon = styled(Icons.Check)`
    overflow: visible;
`;

const BookmarkIcon = styled(Icons.BookmarkCheck)`
    overflow: visible;
`;

const ItemTitle = styled(Link)`
    color: ${theme.colors.white};
    text-decoration: none;
    font-weight: bold;
    font-family: ${theme.fonts.headings};
    font-size: 20px;
`;

const ItemContent = styled.div`
    padding-left: 20px;
    padding-right: ${props => {
        if (props.complete && props.bookmarked) {
            return "85px";
        }
        if (props.complete || props.bookmarked) {
            return "55px";
        }
        return "30px";
    }};
`;

const ItemContentFirstTwoLinks = styled.div`
    padding-left: 20px;
    padding-bottom: 30px;
    padding-right: ${props => {
    if (props.complete && props.bookmarked) {
        return "85px";
    }
    if (props.complete || props.bookmarked) {
        return "55px";
    }
    return "30px";
}};
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* iOS PDF view does not display background images using background-image linear-gradient but works with box-shadow.
    *   Android PDF view has tearing when using box-shadow but not with the linear-gradient.*/
    background-image: ${props =>
        isIOS()
            ? `url(${props.image})`
            : `linear-gradient(
            rgba(
                ${props.red ? theme.colors.redRGB : theme.colors.primaryRGB},
                0.9
            ),
            rgba(
                ${props.red ? theme.colors.redRGB : theme.colors.primaryRGB},
                0.9
            )
        ),
        url(${props.image})`};
    box-shadow: ${props =>
        isIOS()
            ? `inset 0 0 0 2000px
        rgba(
            ${props.red ? theme.colors.redRGB : theme.colors.primaryRGB},
            0.75
        )`
            : "none"};
    background-repeat: no-repeat;
    opacity: 1;
    background-position: ${props =>
        `${props.imageMobilePosition.x}% ${props.imageMobilePosition.y}%`};
    background-size: cover;

    @media only screen and (max-width: 600px) {
        background-position: ${props =>
            `${props.imageMobilePosition.x}% ${props.imageMobilePosition.y}%`};
    }
    @media only screen and (min-width: 601px) {
        background-position: ${props =>
            `${props.imageDesktopPosition.x}% ${
                props.imageDesktopPosition.y
            }%`};
    }
    min-height: 125px;
    font-size: 1em;
`;

Home.propTypes = {
    localizor: PropTypes.object.isRequired
};
export default withLanguageContext(Home);
