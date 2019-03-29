import { createGlobalStyle } from "styled-components";

export const AppGlobalStyles = createGlobalStyle`
    h1,
    h2,
    h3,
    h4,
    h5 {
        font-family: "Merriweather", serif;
        font-weight: 700;
    }

    h1 {
        font-size: 40px;
    }

    h2 {
        font-size: 30px;
    }
    h3 {
        font-size: 20px;
    }
    h4 {
        font-size: 17px;
    }
    h5 {
        font-size: 15px;
    }
    h6 {
        font-family: "Source Sans Pro", sans-serif;
        font-weight: 400;
        font-size: 13px;

        text-transform: uppercase;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: "Source Sans Pro", sans-serif;
        font-weight: 400;
        font-size: 17px;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        text-decoration: none;
        color: #0071bc;
    }

    ul {
        list-style: none;
    }
    ul > li::before {
        content: "\u2022";
        color: #0071bc;
        display: inline-block;
        font-weight: bold;
        font-size: 1.5em;
        padding-right: 7px;
        margin-left: -1em;
    }

    ol {
        list-style: none;
        counter-reset: li;
    }
    ol > li {
        counter-increment: li;
    } 
    ol > li::before {
        content: counter(li) ".";
        color: #0071bc;
        font-weight: bold;
        width: 1em;
        margin-left: -1em;
        margin-right: 0.5em;
        text-align: right;
        direction: rtl;
    } 

    li > h1,
    li > h2,
    li > h3,
    li > h4,
    li > h5,
    li > h6 {
        display: inline-block;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    .small-img {
        width: 50%;
        height: auto;
    }
`;
