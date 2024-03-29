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
import homeStep11 from "../../static/images/home_step_11.jpg";
import homeStep12 from "../../static/images/home_step_12.jpg";
import homeWhyDevelop from "../../static/images/home_why_develop.jpg";
import { isBrowser } from "../../modules/utils/platform";
import { isAndroid } from "../../modules/utils/platform";

class Home extends Component {
    render() {
        const { localizor } = this.props;
        return (
            <HomeWrapper aria-hidden={window.hasOwnProperty("cordova")?"false":"true"}>
                        <IconContainer
                            id={`home_step_${9 + 1}`}
                            key={`home_step_${9 + 1}`}
                        >
                            <Item
                                red={9% 2 !== 0}
                                image={stepImageData[10].image}
                                imageMobilePosition={stepImageData[10].mobile}
                                imageDesktopPosition={stepImageData[10].desktop}
                            >
                                <ItemContent
                                    bookmarked={storage.bookmarks.containsBookmarks(`other_steps.${0}`)}
                                    complete={storage.steps.isStepComplete(10)}
                                >
                                    <FlexContent>
                                        
                                        <PaddedTitle>
                                            <h2>
                                                <ItemTitle
                                                    to={
                                                        (`/othersteps/${11}`)
                                                    }
                                                >
                                                    
                                                    {localizor.strings.other_steps[0].title}
                                                    
                                                </ItemTitle>
                                            </h2>
                                        </PaddedTitle>
                                    </FlexContent>
                                </ItemContent>
                            </Item>
                            <StatusIcons>
                                {storage.bookmarks.containsBookmarks(`other_steps.${0}`)
                                 && (
                                    <BookmarkIcon alt={"Bookmarked"} />
                                )}
                                {storage.steps.isStepComplete(10) && <CheckIcon alt="Complete" />}
                            </StatusIcons>
                        </IconContainer>
                        <IconContainer
                            id={`home_step_${10 + 1}`}
                            key={`home_step_${10 + 1}`}
                        >
                            <Item
                                red={10% 2 !== 0}
                                image={stepImageData[11].image}
                                imageMobilePosition={stepImageData[11].mobile}
                                imageDesktopPosition={stepImageData[11].desktop}
                            >
                                <ItemContent
                                    bookmarked={storage.bookmarks.containsBookmarks(`other_steps.${1}`)}
                                    complete={storage.steps.isStepComplete(11)}
                                >
                                    <FlexContent>
                                        
                                        <PaddedTitle>
                                            <h2>
                                                <ItemTitle
                                                    to={
                                                        (`/othersteps/${12}`)
                                                    }
                                                >
                                                    
                                                    {localizor.strings.other_steps[1].title}
                                                    
                                                </ItemTitle>
                                            </h2>
                                        </PaddedTitle>
                                    </FlexContent>
                                </ItemContent>
                            </Item>
                            <StatusIcons>
                                {storage.bookmarks.containsBookmarks(`other_steps.${1}`)
                                 && (
                                    <BookmarkIcon alt={"Bookmarked"} />
                                )}
                                {storage.steps.isStepComplete(11) && <CheckIcon alt="Complete" />}
                            </StatusIcons>
                        </IconContainer>
    

                {
                localizor.strings.steps.map((step, i) => {
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
                                red={i % 2 !== 1}
                                image={stepImageData[i+2].image}
                                imageMobilePosition={stepImageData[i+2].mobile}
                                imageDesktopPosition={stepImageData[i+2].desktop}
                            >
                                <ItemContent
                                    bookmarked={bookmarked}
                                    complete={complete}
                                >
                                    <FlexContent>
                                        <Icon>
                                            <Icons.StepIcon
                                                step={i + 3}
                                                alt="Step icon"
                                            />
                                        </Icon>
                                        <PaddedTitle>
                                            <h2>
                                                <ItemTitle
                                                    to={
                                                        (`/steps/${i + 1}`)
                                                    }
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
    },
    {
        image: homeStep11,
        mobile: {
            x: 50,
            y: 20
        },
        desktop: { x: 50, y: 35 }
    },
    {
        image: homeStep12,
        mobile: {
            x: 50,
            y: 25
        },
        desktop: { x: 50, y: 25 }
    },

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
    background-color: ${props =>
        `${props.red ? theme.colors.red : theme.colors.primary}`
    };
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
