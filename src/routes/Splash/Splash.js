import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import { withLanguageContext } from "../../components/Language";
import { theme } from "../../modules/config/theme";
import { storage } from "../../modules/storage";
import logo from "../../static/images/dol-white.png";
import splashImg from "../../static/images/splash.jpg";

const Wrapper = styled.div`
    height: 100vh;
    background: url(${splashImg}) no-repeat center;
    background-size: cover;
    background-color: ${theme.colors.primaryDarkest};
`;

const FlexContent = styled.div`
    background: rgba(32, 84, 147, 0.35);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

const SplashHeader = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: ${theme.colors.white};
`;

const BrandLogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Brand = styled.span`
    font-weight: bold;
    font-size: 6em;
    font-family: "${theme.fonts.body}";
`;

const SubText = styled.span`
    color: ${theme.colors.white};
    text-align: center;
    font-weight: bold;
    font-family: ${theme.fonts.headings};
    font-size: 15px;
`;

const LogoWrapper = styled.div`
    width: 75px;
`;
const Logo = styled.img`
    display: block;
    width: 100%;
    height: auto;
`;

const LanguageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & * {
        margin-bottom: 10px;
    }
`;

const LanguageButton = styled.button`
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border-radius: 4px;
    padding: 15px 48px;
    display: inline-block;
    font-size: 1em;
    font-weight: bold;
    border: none;

    &:hover {
        background-color: ${theme.colors.primaryDarker};
    }
`;

class Splash extends Component {
    handleLanguageChange = lang => {
        const { localizor, onComplete } = this.props;
        localizor.setLanguage(lang);
        storage.steps.markSplashComplete();
        onComplete();
    };

    render() {
        return (
            <Wrapper>
                <FlexContent>
                    <SplashHeader>
                        <BrandLogoWrapper>
                            <LogoWrapper>
                                <Logo src={logo} align="middle" />
                            </LogoWrapper>
                            <Brand>ILAB</Brand>
                        </BrandLogoWrapper>
                        <SubText>
                            Working to eliminate the worst forms of child labor,
                            forced labor, and human trafficking worldwide.
                        </SubText>
                    </SplashHeader>
                    <LanguageWrapper id="splash-language-switcher">
                        <LanguageButton
                            id="en-btn"
                            onClick={() => {
                                this.handleLanguageChange("en");
                            }}
                        >
                            English
                        </LanguageButton>
                        <LanguageButton
                            id="es-btn"
                            onClick={() => {
                                this.handleLanguageChange("es");
                            }}
                        >
                            Español
                        </LanguageButton>
                        <LanguageButton
                            id="fr-btn"
                            onClick={() => {
                                this.handleLanguageChange("fr");
                            }}
                        >
                            Français
                        </LanguageButton>
                    </LanguageWrapper>
                </FlexContent>
            </Wrapper>
        );
    }
}

Splash.propTypes = {
    localizor: PropTypes.object.isRequired,
    onComplete: PropTypes.func.isRequired
};

export default withLanguageContext(Splash);
