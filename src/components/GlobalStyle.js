import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1700px){
            font-size: 70%;
        }

    }

    body {
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
    }

    button {
        font-weight: bold;
        font-size: 1.1.rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #00BCD4;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        font-family: 'Inter', sans-serif;

        &:hover {
            background-color: #00BCD4;
            color: #1b1b1b;
        }
    }
    h2 {
            font-weight: lighter;
            font-size: 4rem;
        }

    h3 {
        color: white;
    }

    h4 {
        font-weight: bold;
        font-size: 2rem;
    }

    a {
        font-size: 1.1.rem;
    }

    span {
        color: #00BCD4;
        font-weight: bold;
    }

    p {
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%normal;
    }

`;

export default GlobalStyle;