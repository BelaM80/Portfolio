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
    margin: 0;
    font-size: 1.6rem;
    scroll-behavior: smooth;
    width: 100vw;
}



body {
    color: var(--primary-color) ;
    background-color: var(--secondary-color);
    margin: 0;
    font-family: var(--paragraph-font);
    padding: 0.4rem;
    width: 100vw;
}

#root {
    width: 100vw;
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

a {
    text-decoration: none;
    color: var(--primary-color)
}

h3{
    font-family: var(--head-font);
    border: 2px solid var(--primary-color);
    border-radius: 50px;
    padding: 0.5rem 1rem;    
}
`;



export default GlobalStyle;

