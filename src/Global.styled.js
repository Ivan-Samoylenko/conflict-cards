import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        width: 100vw;
        height: 100vh;

        font-family: sans-serif;

        color: #ccc;
        background-color: #333;
    }

    h1,h2,h3,h4,p,ul {
        margin-top: 0;
        margin-bottom: 0;
    }

    ul {
        padding-left: 0;

        list-style: none;
    }

    a {
        color: inherit;

        text-decoration: none;
    }

    svg, img {
        display: block;
    }

    img {
        width: 100%;
        height: auto;
    }
`;

export default Global;
