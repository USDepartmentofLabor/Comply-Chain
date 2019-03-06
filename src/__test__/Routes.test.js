import { mount } from "enzyme";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { LanguageProvider } from "../components/Language";
import Routes from "../modules/config/routes";
import Localization from "../components/Language/Localization";

describe("Routes", () => {
    describe("Home", () => {
        it("renders Home route", () => {
            const Route = Routes.Home.component;
            mount(
                <LanguageProvider>
                    <Router>
                        <Route />
                    </Router>
                </LanguageProvider>
            );
        });
    });

    describe("Step", () => {
        describe("Render each step", () => {
            const localizor = new Localization();
            localizor.getAvailableLanguages().map(lang => {
                localizor.setLanguage(lang);
                localizor.strings.steps.map((step, i) => {
                    it(`renders step ${i + 1} ${lang}`, () => {
                        const Route = Routes.Step.component;
                        const props = { match: { params: { step: i + 1 } } };
                        mount(
                            <LanguageProvider>
                                <Router>
                                    <Route {...props} />
                                </Router>
                            </LanguageProvider>
                        );
                    });

                    describe(`Step ${i + 1} rendered`, () => {
                        step.topics.map((topic, j) => {
                            it(`renders topic ${j + 1} ${lang}`, () => {
                                const Topic = topic.content;

                                mount(
                                    <Router>
                                        <Topic />
                                    </Router>
                                );
                            });

                            return topic;
                        });
                    });
                    return step;
                });
                return lang;
            });
        });
    });

    describe("About", () => {
        it("renders About route", () => {
            const Route = Routes.About.component;
            mount(
                <LanguageProvider>
                    <Router>
                        <Route />
                    </Router>
                </LanguageProvider>
            );
        });
    });

    describe("Basics", () => {
        it("renders Basics route", () => {
            const Route = Routes.Basics.component;
            mount(
                <LanguageProvider>
                    <Router>
                        <Route />
                    </Router>
                </LanguageProvider>
            );
        });
    });

    describe("KeyResources", () => {
        it("renders KeyResources route", () => {
            const Route = Routes.KeyResources.component;
            mount(
                <LanguageProvider>
                    <Router>
                        <Route />
                    </Router>
                </LanguageProvider>
            );
        });
    });

    describe("WhatAre", () => {
        it("renders WhatAre route", () => {
            const Route = Routes.WhatAre.component;
            mount(
                <LanguageProvider>
                    <Router>
                        <Route />
                    </Router>
                </LanguageProvider>
            );
        });
    });
    describe("WhyDevelop", () => {
        it("renders WhyDevelop route", () => {
            const Route = Routes.WhyDevelop.component;
            mount(
                <LanguageProvider>
                    <Router>
                        <Route />
                    </Router>
                </LanguageProvider>
            );
        });
    });
    describe("Bookmarks", () => {
        it("renders Bookmarks route", () => {
            const Route = Routes.Bookmarks.component;
            mount(
                <LanguageProvider>
                    <Router>
                        <Route />
                    </Router>
                </LanguageProvider>
            );
        });
    });
    describe("Search", () => {
        it("renders Search route", () => {
            const Route = Routes.Search.component;
            mount(
                <LanguageProvider>
                    <Router>
                        <Route />
                    </Router>
                </LanguageProvider>
            );
        });
    });
});
