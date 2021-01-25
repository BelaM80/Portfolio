import Card from "../src/components/Card";
import Navbar from "./components/Navigation";
import GlobalStyle  from "./GlobaStyle";
import styled, { ThemeProvider}from "styled-components/macro";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { useState, useRef } from "react";
import { useOnClickOutside} from "../src/hooks/useOnClickOutside"
import Button from "./components/Button";
import Burger from "./components/Burger";
import Menu from "./components/Menue";



const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
`;


function App() {
const [theme, setTheme] = useState({ mode: 'turquise'})
const [open, setOpen] = useState(false);
const node = useRef(); 
useOnClickOutside(node, () => setOpen(false));

  return (
<ThemeProvider theme={theme}>
    <GlobalStyle />
    <div ref={node}>
      <Burger open={open} setOpen={setOpen}/>
      <Menu open={open} setOpen={setOpen}/>
    </div>
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
