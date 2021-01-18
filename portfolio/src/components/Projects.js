import styled from "styled-components/macro";
import Neowise from "../assets/Neowise-Project.gif";
import MD from "../assets/MD-Webseite.jpg";

const Section = styled.section`
max-width: 45%;
border: 2px solid #00D4FF;
border-radius: 20px;
box-shadow: 0 0 20px #00D4FF, inset 0 0 20px #00D4FF;
margin-bottom: 7rem;
background: none;
padding: 1rem;
max-height: 700px;
  overflow-x: hidden;
  overflow-y: auto;
h1 {
    background-color: var(--secondary-color);
    position: sticky;
    top: 0;
    padding:0.5rem;
    border-radius: 20px;
}
`;

const P = styled.p`
max-width: 100%;
`;

const Div = styled.div`
margin-top: 1rem;
margin-bottom: 2rem;
display: flex;
justify-content: space-around;
div {
margin-left: 1rem;
font-family: var(--head-font)    
    
}
img {
    border-radius: 20px;
    box-shadow: 0 0 10px #00D4FF;
}
a {
    text-decoration: none;
    font-family: var(--paragraph-font);
    color: var(--primary-color);
    padding: 0.4rem 0.2rem;
    border-radius: 30px;
    border: 3px solid orange;
}
a:hover{
    color: orange;
}
`;

const Projects = () => {
    return(
        <Section>
            <h1>Projects</h1>
            <Div>
                <img src={Neowise} alt="Neowise Project" width="500" height="281,25"/>
                <div>
                  <h3>Neowise-Project</h3>
                  <P>If you like 3D and like to move through space while learning more about it, you will love this site. 
                    You are moving around in 3D space with planets and spaceships and use the interface to make your own 
                    search about space-related issues. 🛸🌟🌀
                    </P>
                   <a href="https://neowise-project.herokuapp.com/" target="_blank" rel="noreferrer">👉🏻Go to Project</a>
                </div>
            </Div>
            <Div>
                <img src={MD} alt="Mülledrsdesign" width="500" height="436,53"/>
                <div><h3>müllersdesign</h3>
                <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                 labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                 et ea rebum. 💅🏻🖼🎨
                 </P>
                 <a href="https://muellersdesign.de/" target="_blank" rel="noreferrer">👉🏻Go to Project</a>

                 </div>
            </Div>
            
        </Section>
    )
}

export default Projects;