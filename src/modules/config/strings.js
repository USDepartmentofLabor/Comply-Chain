import LocalizedStrings from "react-localization";
import { Steps } from "../../static/data/step";

export const strings = new LocalizedStrings({
    en: {
        search: "Search",
        steps: Steps.en
    },
    es: {
        search: "Buscar",
        steps: Steps.es
    },
    fr: {
        search: "Rechercher",
        steps: Steps.fr
    }
});
