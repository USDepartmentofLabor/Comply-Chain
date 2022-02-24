import LocalizedStrings from "react-localization";
import { Info } from "../../static/data/info";
import { OtherSteps, Steps } from "../../static/data/step";
import { General } from "../../static/data/general";

export default class Localization {
    constructor() {
        this.strings = new LocalizedStrings({
            en: {
                steps: Steps.en,
                info: Info.en,
                general: General.en,
                other_steps:OtherSteps.en
            },
            es: {
                steps: Steps.es,
                info: Info.es,
                general: General.es,
                other_steps:OtherSteps.es
            },
            fr: {
                steps: Steps.fr,
                info: Info.fr,
                general: General.fr
                ,
                other_steps:OtherSteps.fr
            },
            ms: {
                 steps: Steps.ms,
                 info: Info.ms,
                 general: General.ms,
                 other_steps:OtherSteps.ms
                 
             }
        });

        const lang = localStorage.getItem("lang");

        if (lang) {
            this.strings.setLanguage(lang);
        }
    }

    getAvailableLanguages() {
        return this.strings.getAvailableLanguages();
    }

    setLanguage(lang) {
        this.strings.setLanguage(lang);
        localStorage.setItem("lang", lang);
    }

    getLanguage() {
        return this.strings.getLanguage();
    }

    getInterfaceLanguage() {
        return this.strings.getInterfaceLanguage();
    }

    getStrings() {
        return this.strings;
    }
}
