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
                <Item image={mica}>
                    <ItemContent
                        id="home_whydeveloper"
                        to={Routes.WhyDevelop.path}
                    >
                        <h3>{localizor.strings.info.whyDevelop.title}</h3>
                    </ItemContent>
                </Item>
                <Item green={true} image={diamondMines}>
                    <ItemContent id="home_basics" to={Routes.Basics.path}>
                        <h3>{localizor.strings.info.basics.title}</h3>
                    </ItemContent>
                </Item>

                {localizor.strings.steps.map((step, i) => {
                    return (
                        <CheckIconContainer
                            id={`home_step_${i + 1}`}
                            key={`home_step_${i + 1}`}
                        >
                            <Item green={i % 2 !== 0} image={images[i]}>
                                <FlexContent>
                                    <Icon>
                                        <Icons.StepIcon step={i + 1} />
                                    </Icon>
                                    <PaddedContent>
                                        <ItemContent to={`/steps/${i + 1}`}>
                                            <h3>{step.title}</h3>
                                        </ItemContent>
                                    </PaddedContent>
                                </FlexContent>
                            </Item>
                            {storage.steps.isStepComplete(i) && <CheckIcon />}
                        </CheckIconContainer>
                    );
                })}
            </HomeWrapper>
        );
    }
}

const images = [
    mexicoPeppers,
    girlIndia,
    girlsIraq,
    boyPakistan,
    girlNepal,
    girlUganda,
    girlIndonesia,
    girlPakistan
];

const HomeWrapper = styled.div`
    margin: -1.8em -10px -0.8em;
    width: auto;
`;

const FlexContent = styled.div`
    display: flex;
    align-items: center;
`;

const PaddedContent = styled.span`
    padding-left: 25px;
`;

const Icon = styled.span`
    color: ${theme.colors.white};
    font-size: 2.5em;
    margin-bottom: -10px;
`;

const CheckIconContainer = styled.div`
    position: relative;
`;

const CheckIcon = styled(Icons.BookmarkCheck)`
    position: absolute;
    top: -4px;
    right: 0;
    color: ${theme.colors.white};
    font-size: 2em;
`;

const ItemContent = styled(Link)`
    color: ${theme.colors.white};
    text-decoration: none;
`;

const Item = styled.div`
    background-image: linear-gradient(
            rgba(
                ${props =>
                    props.green
                        ? theme.colors.greenRGB
                        : theme.colors.primaryRGB},
                0.75
            ),
            rgba(
                ${props =>
                    props.green
                        ? theme.colors.greenRGB
                        : theme.colors.primaryRGB},
                0.75
            )
        ),
        url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 40px 20px 2px;
`;

Home.propTypes = {
    localizor: PropTypes.object.isRequired
};
export default withLanguageContext(Home);
