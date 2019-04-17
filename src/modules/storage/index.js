const STEP_KEY = "steps";
const SPLASH_KEY = "splash";
const BOOKMARK_KEY = "bookmarks";
const ACCORDION_KEY = "accordion";
const SEARCH_CACHE_KEY = "search_cache";
const SEARCH_SCROLL = "search_scroll";

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

    if (nextStep === null && steps.length <= totalSteps) {
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

/**
 * Toggles a bookmark by adding or removing it from storage.
 * @param {string} name - unique bookmark name
 * @param {string} prefix - a string that will be prepended to the name
 * @param {string} header - the bookmark header title before the name
 * @param {string=} url - url of the bookmark
 */
const toggleBookmark = (name, prefix, header, url) => {
    const bookmarks = JSON.parse(localStorage.getItem(BOOKMARK_KEY)) || [];

    const index = bookmarks.findIndex(bookmark => bookmark.name === name);
    if (index !== -1) {
        bookmarks.splice(index, 1);
    } else {
        bookmarks.push({
            name,
            prefix,
            header,
            url,
            time: new Date().getTime()
        });
    }
    localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookmarks));
};

/**
 * Remove a bookmark by name.
 * @param {string} name - unique bookmark name
 */
const removeBookmark = name => {
    const bookmarks = JSON.parse(localStorage.getItem(BOOKMARK_KEY)) || [];

    const index = bookmarks.findIndex(bookmark => bookmark.name === name);
    if (index !== -1) {
        bookmarks.splice(index, 1);
    }
    localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookmarks));
};

/**
 * Retrieves a single bookmark by name.
 * @param {string} name - the unqiue bookmark name to retrieve
 */
const retrieveBookmark = name => {
    const bookmarks = JSON.parse(localStorage.getItem(BOOKMARK_KEY)) || [];

    const index = bookmarks.findIndex(bookmark => bookmark.name === name);
    if (index === -1) {
        return undefined;
    }
    return bookmarks[index];
};

/**
 * Retrieve all bookmarks.
 */
const retrieveBookmarks = () => {
    return JSON.parse(localStorage.getItem(BOOKMARK_KEY)) || [];
};

const setAccordionId = id => {
    localStorage.setItem(ACCORDION_KEY, JSON.stringify(id));
};

const retrieveAccordionId = () => {
    return JSON.parse(localStorage.getItem(ACCORDION_KEY));
};

const cacheSearchResults = data => {
    localStorage.setItem(SEARCH_CACHE_KEY, JSON.stringify(data));
};

const retrieveSearchCache = () => {
    return JSON.parse(localStorage.getItem(SEARCH_CACHE_KEY));
};

const setSearchScrollY = scrolly => {
    localStorage.setItem(SEARCH_SCROLL, JSON.stringify(scrolly));
};

const retrieveSearchScrollY = () => {
    return JSON.parse(localStorage.getItem(SEARCH_SCROLL));
};

const clearSearchData = () => {
    localStorage.removeItem(SEARCH_CACHE_KEY);
    localStorage.removeItem(SEARCH_SCROLL);
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
        toggleBookmark,
        removeBookmark,
        retrieveBookmark,
        retrieveBookmarks
    },
    accordion: {
        setAccordionId,
        retrieveAccordionId
    },
    search: {
        cacheSearchResults,
        retrieveSearchCache,
        clearSearchData,
        setSearchScrollY,
        retrieveSearchScrollY
    }
};
