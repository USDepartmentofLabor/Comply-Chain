import { About } from "./about";
import { Basics } from "./basics";
import { KeyResources } from "./key-resources";
import { WhatAre } from "./what-are";
import { WhyDevelop } from "./why-develop";

export const Info = {
    en: {
        about: {
            title: "About this Toolkit",
            keywords: ["Child Labor", "Forced Labor"],
            content: About.en
        },
        whatAre: {
            title: "What are Child Labor and Forced Labor?",
            keywords: ["Child Labor", "Forced Labor"],
            content: WhatAre.en
        },
        whyDevelop: {
            title: "Why Develop a Social Compliance System?",
            keywords: ["Laws"],
            content: WhyDevelop.en
        },
        basic: {
            title: "Basics of a Social Compliance System",
            keywords: ["Management systems"],
            content: Basics.en
        },
        keyResources: {
            title: "Key Resources",
            keywords: [],
            content: KeyResources.en
        }
    },
    es: {
        about: {
            title: "Acerca de este compendio de instrumentos",
            keywords: ["Trabajo infantil", "Trabajo forzoso"],
            content: About.es
        },
        whatAre: {
            title: "¿Qué son el trabajo infantil y el trabajo forzoso?",
            keywords: ["Trabajo infantil", "Trabajo forzoso"],
            content: WhatAre.es
        },
        whyDevelop: {
            title: "¿Por qué crear un sistema de cumplimiento social?",
            keywords: ["Leyes"],
            content: WhyDevelop.es
        },
        basic: {
            title: "Aspectos básicos de un sistema de cumplimiento social",
            keywords: ["Sistemas de gestión"],
            content: Basics.es
        },
        keyResources: {
            title: "Recursos clave",
            keywords: [],
            content: KeyResources.es
        }
    },
    fr: {
        about: {
            title: "À propos de cette boîte à outils",
            keywords: ["Travail des enfants", "Travail forcé"],
            content: About.fr
        },
        whatAre: {
            title:
                "Qu'est-ce que le travail des enfants et le travail forcé\u00a0?",
            keywords: ["Travail des enfants", "Travail forcé"],
            content: WhatAre.fr
        },
        whyDevelop: {
            title: "Pourquoi élaborer un système de conformité sociale\u00a0?",
            keywords: ["Législation"],
            content: WhyDevelop.fr
        },
        basic: {
            title: "Fondements d’un système de conformité sociale",
            keywords: ["Systèmes de gestion"],
            content: Basics.fr
        },
        keyResources: {
            title: "Ressources clés",
            keywords: [],
            content: KeyResources.fr
        }
    }
};
