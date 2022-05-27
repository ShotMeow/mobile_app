import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        font-weight: 700;
        src: local('Montserrat') format('truetype'), url('../fonts/Montserrat/Montserrat-Bold.woff2') format('woff2'), url('../fonts/Montserrat/Montserrat-Bold.woff') format('woff');
    }

    @font-face {
        font-family: 'Montserrat';
        font-weight: 600;
        src: local('Montserrat') format('truetype'), url('../fonts/Montserrat/Montserrat-Semibold.woff2') format('woff2'), url('../fonts/Montserrat/Montserrat-Semibold.woff') format('woff');
    }

    @font-face {
        font-family: 'Montserrat';
        font-weight: 500;
        src: local('Montserrat') format('truetype'), url('../fonts/Montserrat/Montserrat-Medium.woff2') format('woff2'), url('../fonts/Montserrat/Montserrat-Medium.woff') format('woff');
    }

    html {
        scroll-behavior: smooth;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        color: #181818;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    input {
        border: none;
    }

    button {
        cursor: pointer;
        background: none;
        border: none;
    }
`;
