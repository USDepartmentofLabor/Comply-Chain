import LocalizedStrings from "react-localization";
import { Info } from "../../static/data/info";
import { Steps } from "../../static/data/step";

class Localization {
    constructor() {
        this.strings = new LocalizedStrings({
            en: {
                search: "Search",
                steps: Steps.en,
                info: Info.en
            },
            es: {
                search: "Buscar",
                steps: Steps.es,
                info: Info.es
            },
            fr: {
                search: "Rechercher",
                steps: Steps.fr,
                info: Info.fr
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

export const Localize = new Localization();
