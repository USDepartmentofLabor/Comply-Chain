import { mount } from "enzyme";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { LanguageProvider } from "../components/Language";
import LanguageSwitcher from "../components/Menu/LanguageSwitcher";

describe("LanguageSwitcher", () => {
    let props;
    let mountedLanguageSwitcher;
    const languageSwitcher = () => {
        if (!mountedLanguageSwitcher) {
            mountedLanguageSwitcher = mount(
                <LanguageProvider>
                    <Router>
                        <LanguageSwitcher {...props} />
                    </Router>
                </LanguageProvider>
            );
        }
        return mountedLanguageSwitcher;
    };

    beforeEach(() => {
        props = undefined;
        mountedLanguageSwitcher = undefined;
    });

    it("always renders a div", () => {
        const divs = languageSwitcher().find("div");
        expect(divs.length).toBeGreaterThan(0);
    });

    describe("rendered div", () => {
        it("renders language buttons", () => {
            const divs = languageSwitcher()
                .find("div")
                .first();

            expect(divs.children().length).toBe(3);
        });

        describe("rendered language buttons", () => {
            it("changes language to english on button click", () => {
                const enBtn = languageSwitcher()
                    .find("div")
                    .first()
                    .children("#en-btn");

                enBtn.simulate("click");

                expect(mountedLanguageSwitcher.state("language")).toBe("en");
            });
            it("changes language to spanish on button click", () => {
                const enBtn = languageSwitcher()
                    .find("div")
                    .first()
                    .children("#es-btn");

                enBtn.simulate("click");

                expect(mountedLanguageSwitcher.state("language")).toBe("es");
            });
            it("changes language to french on button click", () => {
                const enBtn = languageSwitcher()
                    .find("div")
                    .first()
                    .children("#fr-btn");

                enBtn.simulate("click");

                expect(mountedLanguageSwitcher.state("language")).toBe("fr");
            });
        });
    });
});
