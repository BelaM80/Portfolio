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
import Burger from "./components/Burger";



const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
`;


function App() {
const [theme, setTheme] = useState({ mode: 'turquise'})


  return (
<ThemeProvider theme={theme}>
    <GlobalStyle />
    <Burger />
    <Navbar />
 <Main>
    <Button onClick={e=>setTheme(theme.mode === 'green' ? {mode: 'turquise'} : {mode: 'green'})}>Switch Color</Button>
    <Card />
    <Projects />
    <Skills />
    <Contact />
 </Main>
    <Footer />
</ThemeProvider>
  );
}

export default App;
