import Card from "../src/components/Card";
import Navbar from "./components/Navigation";
import GlobalStyle  from "./GlobaStyle";
import styled, { ThemeProvider}from "styled-components/macro";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { useState } from "react";
import Button from "./components/Button";



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
    <Navbar />
    <Button onClick={e=>setTheme(theme.mode === 'green' ? {mode: 'turquise'} : {mode: 'green'})}>Switch Color</Button>
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
