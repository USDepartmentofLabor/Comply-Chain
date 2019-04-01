import { mount } from "enzyme";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { LanguageProvider } from "../components/Language";
import NavBar from "../components/Menu/NavBar";
import Breadcrumbs from "../components/Menu/Breadcrumbs";

describe("NavBar", () => {
    let props;
    let mountedNavBar;
    const navBar = () => {
        if (!mountedNavBar) {
            mountedNavBar = mount(
                <LanguageProvider>
                    <Router>
                        <NavBar {...props} />
                    </Router>
                </LanguageProvider>
            );
        }
        return mountedNavBar;
    };

    beforeEach(() => {
        props = {
            leftItems: undefined,
            rightItems: undefined,
            localizor: undefined
        };
        mountedNavBar = undefined;
    });

    it("always renders a div", () => {
        const divs = navBar().find("div");
        expect(divs.length).toBeGreaterThan(0);
    });

    describe("rendered div", () => {
        it("renders menu button", () => {
            const menuButton = navBar().find({ id: "menu-btn" });

            expect(menuButton.length).toBeGreaterThan(0);
        });

        it("render right items wrapper", () => {
            const rightItemsWrapper = navBar().find({
                id: "navbar-right-items"
            });
            expect(rightItemsWrapper.length).toBe(1);
        });

        describe("rendered right items wrapper", () => {
            beforeEach(() => {
                props.rightItems = [
                    {
                        props: {
                            content: "Test"
                        }
                    }
                ];
            });

            it("renders right items", () => {
                const rightItemsWrapper = navBar().find({
                    id: "navbar-right-items"
                });

                const items = rightItemsWrapper.find("div");

                expect(items.length).toBe(1);
            });
        });

        it("render left items wrapper", () => {
            const leftItemsWrapper = navBar().find({
                id: "navbar-left-items"
            });
            expect(leftItemsWrapper.length).toBe(1);
        });

        describe("rendered left items wrapper", () => {
            it("renders breadcrumbs", () => {
                const leftItemsWrapper = navBar().find({
                    id: "navbar-left-items"
                });

                const breadcrumbs = leftItemsWrapper.find(Breadcrumbs);

                expect(breadcrumbs.length).toBe(1);
            });
        });
    });
});
