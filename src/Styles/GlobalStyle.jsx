import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

    :root {
        --dark: #181819;
        --dark-two: #1b1c1f;
        --lighter-dark: #1e1e1f; 
        --lighter-dark-two: #212123; 
        --light: #dadada;
        --light-two: #9d9d9d;
        --main-theme: #e92522;
        --main-theme-two: #db4a1e;
        --second-theme: #0091eb;
        --second-theme-two: #007fcf;
        --nav-height: 0px;
        --main-height: calc(100vh - var(--nav-height));
        --main-title-font: 2.5rem;
        --main-subtitle-font: 1.25rem;
        --main-max-font: 1rem;
        --main-med-font: 0.85rem;
        --main-min-font: 0.8rem;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        color: var(--light);
        transition: all 0.2s ease;
        //font-family: "Montserrat", sans-serif;
    }

    body {
        overflow-x: hidden;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`

export default GlobalStyle