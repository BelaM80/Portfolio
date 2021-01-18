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
}

html {
    font-size: 1.875rem;
    color: var(--primary-color);
    
}

body {
    background-color: var(--secondary-color);
    margin: 0;
    display: flex;
    justify-content: center;
}

h1 {
    font-family: 'Major Mono Display', monospace;
    font-size: 2.5rem;
    margin-bottom: 0;
}

h2 {
    font-family: 'Major Mono Display', monospace;
    margin-top: 0.5rem;
    font-size: 1rem;
}


p {
    font-family: 'Cutive Mono', monospace;
}
`;

export default GlobalStyle;

