const STEP_KEY = "steps";
const SPLASH_KEY = "splash";
const BOOKMARK_KEY = "bookmarks";

const createStep = (step, totalTopics) => {
    const steps = JSON.parse(localStorage.getItem(STEP_KEY)) || [];
    if (steps[step]) {
        return;
    }
    steps[step] = { complete: false, topics: [] };
    for (let i = 0; i < totalTopics; i++) {
        steps[step].topics.push(false);
    }
    localStorage.setItem(STEP_KEY, JSON.stringify(steps));
};

const markStepComplete = step => {
    const steps = JSON.parse(localStorage.getItem(STEP_KEY)) || [];
    if (steps[step].complete) {
        return;
    }
    steps[step].complete = true;
    localStorage.setItem(STEP_KEY, JSON.stringify(steps));
};

const isStepComplete = step => {
    const steps = JSON.parse(localStorage.getItem(STEP_KEY)) || [];
    if (!steps[step]) {
        return false;
    }
    if (steps[step].complete) {
        return true;
    }
    if (steps[step].topics.length > 0 && steps[step].topics.every(val => val)) {
        markStepComplete(step);
        return true;
    }

    return false;
};

const findNextIncompleteStep = totalSteps => {
    const steps = JSON.parse(localStorage.getItem(STEP_KEY)) || [];

    let nextStep = null;
    if (!steps || steps.length === 0) {
        return 0;
    }
    steps.map((step, i) => {
        if (nextStep === null && (!step || !step.complete)) {
            nextStep = i;
        }
        return step;
    });

    if (nextStep === null && steps.length < totalSteps) {
        nextStep = steps.length;
    }

    return nextStep;
};

const markTopicComplete = (step, topic) => {
    const steps = JSON.parse(localStorage.getItem(STEP_KEY)) || [];
    if (steps[step] && steps[step].topics[topic]) {
        return;
    }
    steps[step].topics[topic] = true;
    localStorage.setItem(STEP_KEY, JSON.stringify(steps));

    isStepComplete(step);
};

const isTopicComplete = (step, topic) => {
    const steps = JSON.parse(localStorage.getItem(STEP_KEY)) || [];
    return steps[step] && steps[step].topics[topic];
};

const isSplashComplete = () => {
    const isComplete = JSON.parse(localStorage.getItem(SPLASH_KEY)) || false;

    return isComplete;
};

const markSplashComplete = () => {
    localStorage.setItem(SPLASH_KEY, true);
};

const toggleBookmark = (name, url) => {
    const bookmarks = JSON.parse(localStorage.getItem(BOOKMARK_KEY)) || [];

    const index = bookmarks.findIndex(bookmark => bookmark.name === name);
    if (index !== -1) {
        bookmarks.splice(index, 1);
    } else {
        bookmarks.push({ name, url });
    }
    localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookmarks));
};

export const storage = {
    steps: {
        createStep,
        markStepComplete,
        isStepComplete,
        findNextIncompleteStep,
        markTopicComplete,
        isTopicComplete
    },
    splash: {
        isSplashComplete,
        markSplashComplete
    },
    bookmarks: {
        toggleBookmark
    }
};
