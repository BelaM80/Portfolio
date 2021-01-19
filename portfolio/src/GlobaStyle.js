import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
}

:root {
 --primary-color: ${(props) => props.theme.mode === 'turquise' ? '#00D4FF' : '#00FF33'};
 --secondary-color: #100E0E;
 --head-font: 'Major Mono Display', monospace;
 --paragraph-font: 'Cutive Mono', monospace;
}

html {
    font-size: 1.6rem;
    scroll-behavior: smooth;
    
}



body {
    color: var(--primary-color) ;
    background-color: var(--secondary-color);
    margin: 0;
    display: flex;
    justify-content: center;
    font-family: var(--paragraph-font);
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


p, a {
    font-family: var(--paragraph-font);
}
`;



export default GlobalStyle;

