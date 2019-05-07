import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icons from "../../components/Icons";
import { withLanguageContext } from "../../components/Language";
import Routes from "../../modules/config/routes";
import { theme } from "../../modules/config/theme";
import { storage } from "../../modules/storage";
import boyPakistan from "../../static/images/Boy_Pakistan_Corn.jpg";
import mica from "../../static/images/CWerner_mica_002EXTRA.jpg";
import girlsIraq from "../../static/images/Girls_Iraq_School_2017.jpg";
import girlIndia from "../../static/images/Girl_India_Bricks_2016.jpg";
import girlIndonesia from "../../static/images/Girl_Indonesia_Palm_Oil.jpg";
import girlNepal from "../../static/images/Girl_Nepal_Bricks.jpg";
import girlPakistan from "../../static/images/Girl_Pakistan_Cotton_2011.jpg";
import girlUganda from "../../static/images/Girl_Uganda_Farm.jpg";
import diamondMines from "../../static/images/diamond_mines.jpg";
import mexicoPeppers from "../../static/images/TVPRA_CL_Mexico_peppers.jpg";

class Home extends Component {
    render() {
        const { localizor } = this.props;
        return (
            <HomeWrapper>
                <IconContainer>
                    <Item
                        image={infoImageData[0].image}
                        imageMobilePosition={infoImageData[0].mobile}
                        imageDesktopPosition={infoImageData[0].desktop}
                    >
                        <ItemContent>
                            <ItemTitle
                                id="home_whydeveloper"
                                to={Routes.WhyDevelop.path}
                            >
                                {localizor.strings.info.whyDevelop.title}
                            </ItemTitle>
                        </ItemContent>
                    </Item>
                    <StatusIcons>
                        {storage.bookmarks.retrieveBookmark(`whydevelop`) && (
                            <BookmarkIcon />
                        )}
                    </StatusIcons>
                </IconContainer>
                <IconContainer>
                    <Item
                        green={true}
                        image={infoImageData[1].image}
                        imageMobilePosition={infoImageData[1].mobile}
                        imageDesktopPosition={infoImageData[1].desktop}
                    >
                        <ItemContent>
                            <ItemTitle id="home_basics" to={Routes.Basics.path}>
                                {localizor.strings.info.basics.title}
                            </ItemTitle>
                        </ItemContent>
                    </Item>
                    <StatusIcons>
                        {storage.bookmarks.retrieveBookmark(`basics`) && (
                            <BookmarkIcon />
                        )}
                    </StatusIcons>
                </IconContainer>

                {localizor.strings.steps.map((step, i) => {
                    return (
                        <IconContainer
                            id={`home_step_${i + 1}`}
                            key={`home_step_${i + 1}`}
                        >
                            <Item
                                green={i % 2 !== 0}
                                image={stepImageData[i].image}
                                imageMobilePosition={stepImageData[i].mobile}
                                imageDesktopPosition={stepImageData[i].desktop}
                            >
                                <ItemContent>
                                    <FlexContent>
                                        <Icon>
                                            <Icons.StepIcon step={i + 1} />
                                        </Icon>
                                        <PaddedContent>
                                            <ItemTitle to={`/steps/${i + 1}`}>
                                                {step.title}
                                            </ItemTitle>
                                        </PaddedContent>
                                    </FlexContent>
                                </ItemContent>
                            </Item>
                            <StatusIcons>
                                {storage.bookmarks.containsBookmarks(
                                    `steps.${i}`
                                ) && <BookmarkIcon />}
                                {storage.steps.isStepComplete(i) && (
                                    <CheckIcon />
                                )}
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
        image: mica,
        mobile: {
            x: 50,
            y: 38
        },
        desktop: { x: 50, y: 40 }
    },
    {
        image: diamondMines,
        mobile: {
            x: 50,
            y: 25
        },
        desktop: { x: 50, y: 25 }
    }
];

const stepImageData = [
    {
        image: mexicoPeppers,
        mobile: {
            x: 50,
            y: 15
        },
        desktop: { x: 50, y: 20 }
    },
    {
        image: girlIndia,
        mobile: {
            x: 50,
            y: 0
        },
        desktop: { x: 50, y: 10 }
    },
    {
        image: girlsIraq,
        mobile: {
            x: 50,
            y: 35
        },
        desktop: { x: 50, y: 33 }
    },
    {
        image: boyPakistan,
        mobile: {
            x: 50,
            y: 10
        },
        desktop: { x: 50, y: 25 }
    },
    {
        image: girlNepal,
        mobile: {
            x: 50,
            y: 15
        },
        desktop: { x: 50, y: 23 }
    },
    {
        image: girlUganda,
        mobile: {
            x: 50,
            y: 0
        },
        desktop: { x: 50, y: 18 }
    },
    {
        image: girlIndonesia,
        mobile: {
            x: 50,
            y: 0
        },
        desktop: { x: 50, y: 20 }
    },
    {
        image: girlPakistan,
        mobile: {
            x: 50,
            y: 0
        },
        desktop: { x: 50, y: 18 }
    }
];

const HomeWrapper = styled.div`
    margin: -1.8em -10px -0.8em;
    width: auto;
`;

const FlexContent = styled.div`
    display: flex;
    align-items: flex-end;
`;

const PaddedContent = styled.span`
    padding-left: 25px;
`;

const Icon = styled.span`
    color: ${theme.colors.white};
    font-size: 2.5em;
    margin-bottom: -10px;
`;

const IconContainer = styled.div`
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

const CheckIcon = styled(Icons.Check)``;

const BookmarkIcon = styled(Icons.BookmarkCheck)``;

const ItemTitle = styled(Link)`
    color: ${theme.colors.white};
    text-decoration: none;
    font-weight: bold;
    font-family: ${theme.fonts.headings};
    font-size: 20px;
`;

const ItemContent = styled.div`
    padding-left: 20px;
    padding-right: 30px;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url(${props => props.image});

    box-shadow: inset 0 0 0 2000px
        rgba(
            ${props =>
                props.green ? theme.colors.greenRGB : theme.colors.primaryRGB},
            0.75
        );
    background-repeat: no-repeat;
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
