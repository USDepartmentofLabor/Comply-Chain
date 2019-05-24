import { createGlobalStyle } from "styled-components";

export const AppGlobalStyles = createGlobalStyle`
    h1,
    h2,
    h3,
    h4,
    h5 {
        font-family: "Merriweather", serif;
        font-weight: 700;
        margin-top: 30px;
        margin-bottom: -10px;
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
        margin-top: 30px;
        margin-bottom: -10px;
    }

    li {
        h1,h2,h3,h4,h5,h6{
            margin: initial;
        }
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

        * {
            -webkit-print-color-adjust:exact;
        }
    }


    .small-img {
        width: 50%;
        height: auto;
    }

`;
