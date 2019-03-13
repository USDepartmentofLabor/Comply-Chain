const STEP_KEY = "steps";
const SPLASH_KEY = "splash";

export const markStepComplete = step => {
    const steps = JSON.parse(localStorage.getItem(STEP_KEY)) || [];
    if (steps[step]) {
        return;
    }
    steps[step] = true;
    localStorage.setItem(STEP_KEY, JSON.stringify(steps));
};

export const isStepComplete = step => {
    const steps = JSON.parse(localStorage.getItem(STEP_KEY)) || [];
    return steps[step];
};

export const isSplashComplete = () => {
    const isComplete = JSON.parse(localStorage.getItem(SPLASH_KEY)) || false;

    return isComplete;
};

export const markSplashComplete = () => {
    localStorage.setItem(SPLASH_KEY, true);
};
