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
        font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        font-weight: 400;
        font-size: 17px;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        text-decoration: none;
        color: #0071bc;
        word-wrap: break-word;
    }

    .blue-bullets {
        list-style: none;
    }
    .blue-bullets > li::before {
        content: "\\2022";
        color: #0071bc;
        display: inline-block;
        font-weight: bold;
        font-size: 1.5em;
        padding-right: 7px;
        margin-left: -1em;
    }

    .blue-numbers {
        list-style: none;
        counter-reset: li;
    }
    .blue-numbers > li {
        counter-increment: li;
    } 
    .blue-numbers > li::before {
        content: counter(li) ".";
        color: #0071bc;
        font-weight: bold;
        width: 1em;
        margin-left: -1em;
        margin-right: 0.5em;
        text-align: right;
        direction: rtl;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    @media print {
        img {
            max-width: 50%;
            height: auto;
            page-break-inside: avoid;
        }
        .home_item {
            page-break-inside: avoid;
        }
    }


    .small-img {
        width: 50%;
        height: auto;
    }
`;
