import LocalizedStrings from "react-localization";
import { Info } from "../../static/data/info";
import { Steps } from "../../static/data/step";
import { General } from "../../static/data/general";

export default class Localization {
    constructor() {
        this.strings = new LocalizedStrings({
            en: {
                steps: Steps.en,
                info: Info.en,
                general: General.en
            },
            es: {
                steps: Steps.es,
                info: Info.es,
                general: General.es
            },
            fr: {
                steps: Steps.fr,
                info: Info.fr,
                general: General.fr
            }
        });

        localStorage.setItem("lang", "fr");

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
