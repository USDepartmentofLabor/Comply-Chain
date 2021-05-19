import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import Routes from "../../modules/config/routes";
import { theme } from "../../modules/config/theme";
import { storage } from "../../modules/storage";
import { isBrowser } from "../../modules/utils/platform";
import { isIOS } from "../../modules/utils/platform";
import { isAndroid } from "../../modules/utils/platform";
import BrandStrip from "../BrandStrip";
import Icons from "../Icons";
import { withLanguageContext } from "../Language";
import BottomDrawer from "../Menu/BottomDrawer/BottomDrawer";
import BottomNavBar from "../Menu/BottomNavBar";
import NavBar from "../Menu/NavBar";
import MobileScrollbar from "../MobileScrollbar";
import { Navigator } from "../Navigation";
import Share from "../Share";
import StepProgressBar from "../StepProgessBar";
import ScrollToTop from "./ScrollToTop";
import SkipToMainContent from "../SkipToMainContent/SkipToMainContent";

const Main = styled.div`
    padding: 0 10px;
`;

const MainWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 5.2em;
    top: calc(5.2em + constant(safe-area-inset-top));
    top: calc(5.2em + env(safe-area-inset-top));
    bottom: 3.2em;
    bottom: calc(3.2em + constant(safe-area-inset-bottom));
    bottom: calc(3.2em + env(safe-area-inset-bottom));
    overflow-y: overlay;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;

    @media print {
        position: unset;
    }
`;

const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    @media print {
        display: none;
    }
`;

const Footer = styled.div`
    position: fixed;
    bottom: 0;
    @media print {
        display: none;
    }
`;

const StepBarWrapper = styled.div`
    background-color: ${theme.colors.grayLightest};
    padding: 30px 30px;
    border-bottom: 1px solid ${theme.colors.grayLight};

    @media print {
        display: none;
    }
`;

const NavbarWrapper = styled.div``;

const Container = styled.div`
    margin-top: 1.8em;
    margin-bottom: 0.8em;
    margin-left: auto;
    margin-right: auto;
    max-width: 900px;
    width: 100%;
`;

const BottomNavButton = styled.button`
    border: none;
    background: transparent;
`;

const ToastContainerWrapper = styled.div`
    .toast-container {
        bottom: 3.2em;
        bottom: calc(3.2em + constant(safe-area-inset-bottom));
        bottom: calc(3.2em + env(safe-area-inset-bottom));
        & > * {
            color: ${theme.colors.white};
            background: ${theme.colors.primary};
        };
        width:399px;
        left:47.5%;
    }

    .toast {
        background: ${theme.colors.primary};
        position: fixed;
        align-content:center;
        align-items: center;
        left:10px;
        right:10px;
        bottom:70px;
        width:300px;
        margin: 0 auto;
    }
`;

class AppWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.updateNavBarItems(),
            bottomDrawerActive: false,
            sideNavVisible: false,
            backUrl: undefined,
            isStmShown:false
        };


    }
    

    componentWillMount() {

    document.addEventListener("keydown", this.handleKeyPress, false);
        if (window.PointerEvent) {
            document.addEventListener("pointerdown", this.closeDrawer, false);
        } else {
            document.addEventListener("mousedown", this.closeDrawer, false);
        }
    }

    componentDidMount() {
        //document.getElementById("showSTM").style.display = 'flex';
        if (isIOS() || isAndroid()) {
            document.getElementById("showSTM").style.display = 'none';
        }
        storage.search.clearSearchData();
    }
    componentWillUpdate() {
        
        document.getElementById('navbar-left-items').setAttribute("tabindex","-1")
        document.getElementById('navbar-left-items').getElementsByTagName("a")[0].setAttribute("tabindex","-1")
        document.getElementById("menu-btn").setAttribute("tabindex","-1");
        //document.getElementById("showSTM").style.display = 'none';
        document.getElementById("menu-btn").style.paddingBottom = '16px';
        document.getElementById("menu-btn").style.paddingTop = '16px';
        document.getElementById("menu-btn").style.height = '55px';
        if (isIOS() || isAndroid()) {
                document.getElementById("showSTM").style.display = 'none';
                }
        }
     componentDidUpdate() {
        }
        
        

    handleKeyPress = event => {
        console.log(event)
            //Adding conditions where the Skip to Main link would only be visible when the Tab focus is around that area.
            var stmNavBar = document.getElementById("showSTM"); // Full Skip to Main Strip
            var skip_to_main_focus_div = document.getElementById("skip_to_main_focus_div"); // Full Skip to Main Strip
            
            var stmNavLink = document.getElementById("showSTM1");// Inner Link
            // var isFocused =  function () { return document.activeElement === stmNavLink;}
            // if (event.code==="Tab" && !isFocused || event.code==="Tab" && event.target.innerText==='ILAB')  {
            //     //stmNavBar.focus();
            //     stmNavLink.ariaLabel =""
            //     stmNavBar.style.display = 'flex';
            //     document.getElementById("menu-btn").style.paddingBottom = '8px';
            //     document.getElementById("menu-btn").style.paddingTop = '8px';
            //     document.getElementById("menu-btn").style.height = '40px';

            // }
        if(event.code==="Tab"){
                if(!this.isStmShown && !event.shiftKey){
                    stmNavBar.style.display = 'flex';
                    stmNavLink.focus;
                    this.isStmShown = true;
                    skip_to_main_focus_div.tabIndex = '-1'
                }else{
                    if(event.target.innerText==='Skip to Main Content'){
                        stmNavBar.style.display = 'none';
                        //this.isStmShown = false;
                        console.log("1")
                        if(event.shiftKey && event.keyCode == 9) { 
                            this.isStmShown = false;
                            skip_to_main_focus_div.tabIndex = '1'
                            stmNavLink.tabIndex = '0';

                        }
                    }
                    if(event.target.innerText==='Comply Chain'|| event.target.innerText==='Comply Chain Homepage'){
                        if(event.shiftKey && event.keyCode == 9) { 
                            if(stmNavBar.style.display=='none'){
                                stmNavBar.style.display = 'flex';
                            }else{
                                stmNavBar.style.display = 'none';
                                this.isStmShown = false;
                                console.log("2")
                            }
                        }
                    }else{
                            if(event.target.id==='main'){
                                //stmNavBar.style.display = 'flex';
                            }else{
                                stmNavBar.style.display = 'none';
                                console.log("3")
                                if(!this.isStmShown){
                                    stmNavLink.tabIndex = "99"
                                }
                                
                            }
                        }
                }
                console.log(event.target.innerText)
                
                
                //  if(event.target.innerText==='Skip to Main Content'){
                //      if(document.activeElement === stmNavLink){
                //          stmNavBar.style.display = 'none';
                //          this.isStmShown = false;
                //      }
                //  }else{
                //     if(event.target.innerText==='ILAB'){
                //         if(event.shiftKey && event.keyCode == 9) { 
                //             if(stmNavBar.style.display=='none'){
                //                 stmNavBar.style.display = 'flex';
                //             }else{
                //                 stmNavBar.style.display = 'none';
                //                 this.isStmShown = false;
                //             }
                //         }else{
                //             //stmNavBar.style.display = 'none';
                //         }
                        
                //     }else{
                //         if(event.target.id==='main'){
                //             stmNavBar.style.display = 'flex';
                //         }else{
                //             stmNavBar.style.display = 'none';
                //             this.isStmShown = false;
                //         }
                //     }
                //  }
                if(event.shiftKey && event.keyCode == 9) { 
                    document.getElementById('navbar-left-items').removeAttribute("tabindex");
                    document.getElementById('navbar-left-items').getElementsByTagName("a")[0].removeAttribute("tabindex");
                    document.getElementById("menu-btn").removeAttribute("tabindex");
                }
            }

            if (event.code==="Enter")  {
                document.getElementById("showSTM").style.display = 'none';
                document.getElementById("menu-btn").style.paddingBottom = '16px';
                document.getElementById("menu-btn").style.paddingTop = '16px';
                document.getElementById("menu-btn").style.height = '55px';
                this.isStmShown = true;
             }
            if (event.target.id === "bottom-drawer-indenturedProductList-link") {
                this.setState({ bottomDrawerActive: true });
            }
            if (event.target.id === "bottom-drawer-indenturedProductList-link" && event.key==="Enter") {
                 this.setState({ bottomDrawerActive: false });
            }
        };

    componentDidUpdate(prevProps) {
        if (prevProps.localizor.language !== this.props.localizor.language) {
            this.setState({ ...this.updateNavBarItems() });
        }
        if (prevProps.location.pathname !== this.props.location.pathname) {
            const { pathname } = prevProps.location;
            const exclude = [
                Routes.Search.path,
                Routes.Bookmarks.path,
                Routes.Home.path
            ];
            let backUrl = undefined;
            if (!exclude.includes(pathname)) {
                backUrl = pathname;
            } else if (pathname === Routes.Home.path) {
                backUrl = undefined;
            } else {
                backUrl = this.state.backUrl;
            }
            this.setState({ backUrl });
        }
    }

    componentWillUnmount() {
        storage.search.clearSearchData();
        if (window.PointerEvent) {
            document.removeEventListener(
                "pointerdown",
                this.closeDrawer,
                false
            );
        } else {
            document.removeEventListener("mousedown", this.closeDrawer, false);
        }
    }

    updateNavBarItems = () => {
        const { localizor } = this.props;
        const items = {
            navBarLeftItems: [
                {
                    props: {
                        as: NavLink,
                        to: Routes.WhatAre.path,
                        content: localizor.strings.info.whatAre.title,
                        id: "what-are-link",
                        key: "whatAre"
                    }
                },
            ],

            bottomNavItems: [
                {
                    props: {
                        as: NavLink,
                        to: Routes.Bookmarks.path,
                        id: "bookmarks-link",
                        onClick: e => {
                            this.displayBackPage(e, Routes.Bookmarks.path);
                        }
                    },
                    icon: Icons.Bookmarks,
                    label: localizor.strings.general.bookmarks,
                    alt: localizor.strings.general.bookmarks
                },
                {
                    props: {
                        as: NavLink,
                        to: "/search",
                        id: "search-link",
                        onClick: e => {
                            this.displayBackPage(e, Routes.Search.path);
                        }
                    },
                    icon: Icons.Search,
                    label: localizor.strings.general.search,
                    alt: localizor.strings.general.search
                },
                {
                    props: {
                        as: Share,
                        id: "share-link"
                    },
                    icon: Icons.Share,
                    label: localizor.strings.general.share,
                    alt: localizor.strings.general.share
                },
                {
                    props: {
                        as: BottomNavButton,
                        id: "about-link",
                        onClick: () => this.toggleBottomDrawer()
                    },
                    icon: Icons.About,
                    label: localizor.strings.general.about,
                    alt: localizor.strings.general.about
                }
            ],

            bottomDrawerItems: [
                {
                    props: {
                        as: NavLink,
                        id: "bottom-drawer-about-link",
                        to: Routes.About.path,
                        onClick: () => this.toggleBottomDrawer()
                    },
                    label: localizor.strings.info.about.title
                },
                {
                    props: {
                        as: NavLink,
                        id: "bottom-drawer-findings-link",
                        to: Routes.Findings.path,
                        onClick: () => this.toggleBottomDrawer()
                    },
                    label: localizor.strings.info.findings.title
                },
                {
                    props: {
                        as: NavLink,
                        id: "bottom-drawer-goods-link",
                        to: Routes.Goods.path,
                        onClick: () => this.toggleBottomDrawer()
                    },
                    label: localizor.strings.info.goods.title
                },
                {
                     props: {
                         as: NavLink,
                         id: "bottom-drawer-indenturedProductList-link",
                         to: Routes.IndenturedProductList.path,
                         onClick: () => this.toggleBottomDrawer(),
                         onKeyDown: () => this.toggleBottomDrawer()
                },
                         label: localizor.strings.info.indenturedProductList.title
                }
            ]
        };
        return items;
    };

    displayBackPage = (e, backPageUrl) => {
        const { location, history } = this.props;
        const { backUrl } = this.state;

        if (backPageUrl === location.pathname && backUrl) {
            e.preventDefault();
            history.push(backUrl);
        }
    };

    toggleBottomDrawer = () => {
        this.setState({ bottomDrawerActive: !this.state.bottomDrawerActive });
    };

    closeDrawer = e => {
        const aboutBtn = document.getElementById("about-link");
        const bottomDrawer = document.getElementById("bottom-drawer");
        if (aboutBtn.contains(e.target) || bottomDrawer.contains(e.target)) {
            return;
        }
        this.setState({ bottomDrawerActive: false });
    };

    handleSideNavToggle = visible => {
        if (isBrowser()) return;
        this.setState({ sideNavVisible: visible });
    };

    showSkipToMainLink = (event) => {

        if (event.key==="Tab") {
             console.log('Show STM in the browser');
             return true;
        } else {
        return false;}
    };

    render() {
        const {
            navBarLeftItems,
            bottomNavItems,
            bottomDrawerActive,
            bottomDrawerItems,
            sideNavVisible,
            backUrl

            } = this.state;
        const { location } = this.props;
        return (
            <MobileScrollbar>
                <ScrollToTop>
                    <Header>

                <NavbarWrapper>
                    <div id="skip_to_main_focus_div" aria-hidden="true"></div>
                    <div>
                       { (isBrowser) ? <SkipToMainContent /> : null }
                     </div>
                 <div id="brand-strip-container">
                            <BrandStrip />
                            </div>
                            <NavBar
                                leftItems={navBarLeftItems}
                                onSideNavToggle={this.handleSideNavToggle}
                                backUrl={backUrl}
                            />
                        </NavbarWrapper>
                    </Header>
                    <div aria-hidden={sideNavVisible}>
                        <MainWrapper >
                            {location.pathname.includes("/steps") && (
                                <StepBarWrapper id="step_progess_bar">
                                    <StepProgressBar />
                                </StepBarWrapper>
                            )}
                    <Main id="main" tabIndex="-1">
                                <Container id="container" aria-hidden="false">
                                    <Navigator />

                                    <ToastContainerWrapper>
                                        <ToastContainer
                                            className="toast-container"
                                            toastClassName="toast"
                                            autoClose={false}
                                            closeButton={false}
                                            closeOnClick={false}
                                            position="bottom-center"
                                        />
                                    </ToastContainerWrapper>
                                </Container>
                            </Main>
                        </MainWrapper>
                        <Footer>
                            <BottomNavBar
                                id="bottom-nav-bar"
                                items={bottomNavItems}
                            />
                            <BottomDrawer
                                id="bottom-drawer"
                                active={bottomDrawerActive}
                                items={bottomDrawerItems}
                                onClose={() => {
                                    this.setState({
                                        bottomDrawerActive: false
                                    });
                                }}
                            />
                        </Footer>
                    </div>
                </ScrollToTop>
            </MobileScrollbar>
        );
    }
}

AppWrapper.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    localizor: PropTypes.object.isRequired
};

export default withRouter(withLanguageContext(AppWrapper));
