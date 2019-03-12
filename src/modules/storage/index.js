const stepKey = "steps";

export const markStepComplete = step => {
    const steps = JSON.parse(localStorage.getItem(stepKey)) || [];
    if (steps[step]) {
        return;
    }
    steps[step] = true;
    localStorage.setItem(stepKey, JSON.stringify(steps));
};

export const isStepComplete = step => {
    const steps = JSON.parse(localStorage.getItem(stepKey)) || [];
    return steps[step];
};
