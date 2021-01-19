import Card from "../src/components/Card";
import Navbar from "./components/Navigation";
import GlobalStyle  from "./GlobaStyle";
import styled, { ThemeProvider}from "styled-components/macro";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { useState } from "react";



const Wrapper = styled.div`
width:100%;
display: flex;
flex-wrap: wrap;
place-content: space-between center;
flex-direction: column;
align-items: center;
`;


function App() {
const [theme, setTheme] = useState({ mode: 'turquise'})


  return (
<ThemeProvider theme={theme}>
 <Wrapper>
    <GlobalStyle />
    <Navbar onClick={e=>setTheme(theme.mode === 'green' ? {mode: 'turquise'} : {mode: 'green'})}/>
    <Card />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
 </Wrapper>
</ThemeProvider>
  );
}

export default App;
