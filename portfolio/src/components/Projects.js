import styled from "styled-components/macro";
import Neowise from "../assets/Neowise-Project.gif";
import MD from "../assets/MD-Webseite.jpg";
import Section from "./Section";

const SectionPlus = styled(Section)`
max-height: 700px;
overflow-x: hidden;
overflow-y: scroll;


`;

const Article = styled.article`
min-width: 370px;
`;

const P = styled.p`
max-width: 100%;
`;

const Div = styled.div`
margin-top: 1rem;
margin-bottom: 2.8rem;
display: flex;
justify-content: space-around;
flex-direction: row;
@media (max-width: 1300px) {
    flex-direction: column;
}

h3 {
    margin: 0;
    border: none;
    padding: 0;
}
img {
    border-radius: 20px;
    box-shadow: 0 0 10px var(--primary-color);
    margin-right: 0.8rem;
  @media (max-width: 1300px) {
      margin-right: 0;
      margin-bottom: 0.8rem;
  }
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
        <SectionPlus id="projects">
            <h1 >Projects</h1>
            <Div>
                <img src={Neowise} alt="Neowise Project" width="360" height="202,5"/>
                <Article>
                  <h3>Neowise-Project</h3>
                  <P>If you like 3D and like to move through space while learning more about it, you will love this site. 
                    You are moving around in 3D space with planets and spaceships and use the interface to make your own 
                    search about space-related issues. 🛸🌟🌀
                    </P>
                   <a href="https://neowise-project.herokuapp.com/" target="_blank" rel="noreferrer">👉🏻Go to Project</a>
                </Article>
            </Div>
            <Div>
                <img src={MD} alt="Mülledrsdesign" width="360" height="314,3"/>     
                <Article><h3>müllersdesign</h3>
                <P>This is my self coded site for my business as exhibition designer. I realised it as my final project 
                    for the webdesign course I made from April to July in 2020.  💅🏻🖼🎨
                 </P>
                 <a href="https://muellersdesign.de/" target="_blank" rel="noreferrer">👉🏻Go to Project</a>

                 </Article>
            </Div>
            
        </SectionPlus>
    )
}

export default Projects;