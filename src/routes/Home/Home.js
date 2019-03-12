import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../modules/config/theme";
import { withLanguageContext } from "../../components/Language";
import PropTypes from "prop-types";
import Routes from "../../modules/config/routes";
import Icons from "../../components/Icons";
import { isStepComplete } from "../../modules/storage";

class Home extends Component {
    render() {
        const { localizor } = this.props;
        return (
            <div>
                <Item>
                    <ItemContent
                        id="home_whydeveloper"
                        to={Routes.WhyDevelop.path}
                    >
                        {localizor.strings.info.whyDevelop.title}
                    </ItemContent>
                </Item>
                <Item>
                    <ItemContent id="home_basics" to={Routes.Basics.path}>
                        {localizor.strings.info.basics.title}
                    </ItemContent>
                </Item>

                {localizor.strings.steps.map((step, i) => {
                    return (
                        <CheckIconContainer
                            id={`home_step_${i + 1}`}
                            key={`home_step_${i + 1}`}
                        >
                            <Item>
                                <FlexContent>
                                    <Icon>
                                        <Icons.StepIcon step={i + 1} />
                                    </Icon>
                                    <PaddedContent>
                                        <ItemContent to={`/steps/${i + 1}`}>
                                            {step.title}
                                        </ItemContent>
                                    </PaddedContent>
                                </FlexContent>
                            </Item>
                            {isStepComplete(i + 1) && <CheckIcon />}
                        </CheckIconContainer>
                    );
                })}
            </div>
        );
    }
}

const FlexContent = styled.div`
    display: flex;
    align-items: center;
`;

const PaddedContent = styled.span`
    padding-left: 25px;
`;

const Icon = styled.span`
    color: ${theme.colors.primaryDarker};
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
    color: ${theme.colors.primaryDarker};
    font-size: 2em;
`;

const ItemContent = styled(Link)`
    color: ${theme.colors.primaryDarker};
    font-size: 1.25em;
    font-weight: bold;
    text-decoration: none;
`;

const Item = styled.div`
    border: 1px solid ${theme.colors.grayLight};
    margin-top: 1em;
    padding: 20px 20px;
`;

Home.propTypes = {
    localizor: PropTypes.object.isRequired
};
export default withLanguageContext(Home);
