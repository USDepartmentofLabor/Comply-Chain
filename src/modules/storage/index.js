const STEP_KEY = "steps";
const SPLASH_KEY = "splash";

export const createStep = (step, totalTopics) => {
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

export const markStepComplete = step => {
    const steps = JSON.parse(localStorage.getItem(STEP_KEY)) || [];
    if (steps[step].complete) {
        return;
    }
    steps[step].complete = true;
    localStorage.setItem(STEP_KEY, JSON.stringify(steps));
};

export const isStepComplete = step => {
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

export const markTopicComplete = (step, topic) => {
    const steps = JSON.parse(localStorage.getItem(STEP_KEY)) || [];
    if (steps[step] && steps[step].topics[topic]) {
        return;
    }
    steps[step].topics[topic] = true;
    localStorage.setItem(STEP_KEY, JSON.stringify(steps));

    isStepComplete(step); // mark step as complete if it is
};

export const isTopicComplete = (step, topic) => {
    const steps = JSON.parse(localStorage.getItem(STEP_KEY)) || [];
    return steps[step] && steps[step].topics[topic];
};

export const isSplashComplete = () => {
    const isComplete = JSON.parse(localStorage.getItem(SPLASH_KEY)) || false;

    return isComplete;
};

export const markSplashComplete = () => {
    localStorage.setItem(SPLASH_KEY, true);
};
