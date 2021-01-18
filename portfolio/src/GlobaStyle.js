import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
}

:root {
 --primary-color: #00D4FF;
 --secondary-color: #100E0E;
 --head-font: 'Major Mono Display', monospace;
 --paragraph-font: 'Cutive Mono', monospace;
}

html {
    font-size: 1.6rem;
    color: var(--primary-color);
    
}



body {
    background-color: var(--secondary-color);
    margin: 0;
    display: flex;
    justify-content: center;
}

h1 {
    font-family: var(--head-font);
    font-size: 2.5rem;
    margin-bottom: 0;
}

h2 {
    font-family: var(--head-font);
    margin-top: 0.5rem;
    font-size: 1rem;
}


p {
    font-family: var(--paragraph-font);
}
`;


export default GlobalStyle;
