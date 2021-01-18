import Card from "../src/components/Card";
import Navbar from "./components/Navigation";
import GlobalStyle from "./GlobaStyle";
import styled from "styled-components/macro";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";


const Wrapper = styled.div`
width:100%;
display: flex;
flex-wrap: wrap;
place-content: space-between center;
flex-direction: column;
align-items: center;
`;


function App() {
  return (
 <Wrapper>
    <GlobalStyle />
    <Navbar />
    <Card />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
 </Wrapper>
  );
}

export default App;
