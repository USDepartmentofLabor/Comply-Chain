import { mount } from "enzyme";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { LanguageProvider } from "../components/Language";
import Routes from "../modules/config/routes";
import Localization from "../components/Language/Localization";

describe("Routes", () => {
    const localizor = new Localization();
    localizor.getAvailableLanguages().forEach(lang => {
        localizor.setLanguage(lang);
        describe(lang, () => {
            let mountedComp;
            const localizeComp = comp => {
                if (!mountedComp) {
                    mountedComp = mount(
                        <LanguageProvider>{comp}</LanguageProvider>
                    );
                }
                mountedComp.state().setLanguage(lang);
                return mountedComp;
            };
            beforeEach(() => {
                mountedComp = undefined;
            });
            describe("Home", () => {
                it("renders Home route", () => {
                    const Route = Routes.Home.component;
                    localizeComp(
                        <Router>
                            <Route />
                        </Router>
                    );
                });
            });

            describe("Step", () => {
                describe("Render each step", () => {
                    let props;
                    let mountedStep;
                    const Step = Routes.Step.component;
                    const step = () => {
                        if (!mountedStep) {
                            mountedStep = localizeComp(
                                <Router>
                                    <Step {...props} />
                                </Router>
                            );
                        }
                        return mountedStep;
                    };

                    beforeEach(() => {
                        props = undefined;
                        mountedStep = undefined;
                    });
                    localizor.strings.steps.map((stepData, i) => {
                        it(`renders step ${i + 1} ${lang}`, () => {
                            props = {
                                match: { params: { step: i + 1 } }
                            };

                            if (step().state("prevStep")) {
                                const prevButton = step().find("#prev-step");
                                prevButton.simulate("click");
                            }
                            if (step().state("nextStep")) {
                                const nextButton = step().find("#next-step");
                                nextButton.simulate("click");
                            }
                        });

                        describe(`Step ${i + 1} rendered`, () => {
                            let props;
                            let mountedTopic;
                            const Topic = Routes.Topic.component;
                            const topic = () => {
                                if (!mountedTopic) {
                                    mountedTopic = localizeComp(
                                        <Router>
                                            <Topic {...props} />
                                        </Router>
                                    );
                                }
                                return mountedTopic;
                            };

                            beforeEach(() => {
                                props = undefined;
                                mountedTopic = undefined;
                            });
                            stepData.topics.map((topicData, j) => {
                                it(`renders topic ${j + 1} ${lang}`, () => {
                                    props = {
                                        match: {
                                            params: {
                                                step: i + 1,
                                                topic: j + 1
                                            }
                                        },
                                        localizor
                                    };

                                    if (topic().state("prevTopic")) {
                                        const prevButton = topic().find(
                                            "#prev-step"
                                        );
                                        prevButton.simulate("click");
                                    }
                                    if (topic().state("nextTopic")) {
                                        const nextButton = topic().find(
                                            "#next-topic"
                                        );
                                        nextButton.simulate("click");
                                    }
                                    if (topic().state("nextStep")) {
                                        const nextButton = topic().find(
                                            "#next-step"
                                        );
                                        nextButton.simulate("click");
                                    }
                                });

                                return topicData;
                            });
                        });
                        return stepData;
                    });
                });
            });

            describe("About", () => {
                it("renders About route", () => {
                    const Route = Routes.About.component;
                    localizeComp(
                        <Router>
                            <Route />
                        </Router>
                    );
                });
            });

            describe("Basics", () => {
                it("renders Basics route", () => {
                    const Route = Routes.Basics.component;
                    localizeComp(
                        <Router>
                            <Route />
                        </Router>
                    );
                });
            });

            describe("KeyResources", () => {
                it("renders KeyResources route", () => {
                    const Route = Routes.KeyResources.component;
                    localizeComp(
                        <Router>
                            <Route />
                        </Router>
                    );
                });
            });

            describe("WhatAre", () => {
                it("renders WhatAre route", () => {
                    const Route = Routes.WhatAre.component;
                    localizeComp(
                        <Router>
                            <Route />
                        </Router>
                    );
                });
            });
            describe("WhyDevelop", () => {
                it("renders WhyDevelop route", () => {
                    const Route = Routes.WhyDevelop.component;
                    localizeComp(
                        <Router>
                            <Route />
                        </Router>
                    );
                });
            });
            describe("Findings", () => {
                it("renders Findings route", () => {
                    const Route = Routes.Findings.component;
                    localizeComp(
                        <Router>
                            <Route />
                        </Router>
                    );
                });
            });
            describe("Goods", () => {
                it("renders Goods route", () => {
                    const Route = Routes.Goods.component;
                    localizeComp(
                        <Router>
                            <Route />
                        </Router>
                    );
                });
            });
            describe("Bookmarks", () => {
                it("renders Bookmarks route", () => {
                    const Route = Routes.Bookmarks.component;
                    localizeComp(
                        <Router>
                            <Route />
                        </Router>
                    );
                });
            });
            describe("Search", () => {
                it("renders Search route", () => {
                    const Route = Routes.Search.component;
                    localizeComp(
                        <Router>
                            <Route />
                        </Router>
                    );
                });
            });
        });
    });
});
