import { storage } from "../modules/storage";

describe("Storage Module", () => {
    beforeEach(() => {
        localStorage.clear();
    });
    describe("splash storage", () => {
        it("splash checks splash is incomplete", () => {
            expect(storage.splash.isSplashComplete()).toBe(false);
        });
        it("marks splash as complete", () => {
            storage.splash.markSplashComplete();
            expect(storage.splash.isSplashComplete()).toBe(true);
        });
    });

    describe("steps storage", () => {
        it("creates a step", () => {
            storage.steps.createStep(0);
            const step = JSON.parse(localStorage.getItem("steps"));
            expect(step.length).toBe(1);
        });
        it("creates a step with 3 topics", () => {
            storage.steps.createStep(0, 3);
            const step = JSON.parse(localStorage.getItem("steps"));
            expect(step[0].topics.length).toBe(3);
            expect(step[0].topics.every(topic => !topic)).toBe(true);
        });

        it("checks if step is not complete", () => {
            storage.steps.createStep(0, 3);
            expect(storage.steps.isStepComplete(0)).toBe(false);
        });

        it("checks if topic is not complete", () => {
            storage.steps.createStep(0, 3);
            expect(storage.steps.isTopicComplete(0, 0)).toBe(false);
        });

        it("marks topic as complete", () => {
            storage.steps.createStep(0, 3);
            storage.steps.markTopicComplete(0, 0);
            expect(storage.steps.isTopicComplete(0, 0)).toBe(true);
        });

        it("marks step as complete", () => {
            storage.steps.createStep(0, 3);
            for (let i = 0; i < 3; i++) {
                storage.steps.markTopicComplete(0, i);
            }
            expect(storage.steps.isStepComplete(0)).toBe(true);
        });

        it("can find the next incomplete step", () => {
            storage.steps.createStep(0, 3);
            for (let i = 0; i < 3; i++) {
                storage.steps.markTopicComplete(0, i);
            }
            storage.steps.createStep(1, 5);
            expect(storage.steps.findNextIncompleteStep(2)).toBe(1);
        });
    });
    describe("boomarks storage", () => {
        it("adds bookmark to storage", () => {
            storage.bookmarks.toggleBookmark("test", "/testurl");
            const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
            expect(bookmarks.length).toBe(1);
        });
        it("has correct bookmark values", () => {
            storage.bookmarks.toggleBookmark("test", "/testurl");
            const bookmark = JSON.parse(localStorage.getItem("bookmarks"))[0];
            expect(bookmark.name).toBe("test");
            expect(bookmark.url).toBe("/testurl");
        });
        it("remove bookmark from storage", () => {
            storage.bookmarks.toggleBookmark("test", "/testurl");
            storage.bookmarks.toggleBookmark("test");
            const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
            expect(bookmarks.length).toBe(0);
        });
    });
});
