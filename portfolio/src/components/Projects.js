import styled from "styled-components/macro";
import Bela from "../assets/Bela.png";

const Section = styled.section`
max-width: 45%;
border: 2px solid #00D4FF;
border-radius: 20px;
box-shadow: 0 0 20px #00D4FF, inset 0 0 20px #00D4FF;
margin-bottom: 7rem;
background: none;
padding: 1rem;
`;

const P = styled.p`
max-width: 100%;
`;

const Div = styled.div`
display: flex;
justify-content: space-between;
div {
    display: inline;
    
}
`;

const Projects = () => {
    return(
        <Section>
            <h1>Projects</h1>
            <div>
                <img />
                <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                et ea rebum. 🛸🌟☄🌀</P>
            </div>
            <div>
                <img />
                <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                 labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                 et ea rebum. 💅🏻🖼🎨</P>
            </div>
            <div>
                <img />
                <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                 labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 💅🏻🖼🎨</P>
            </div>
        </Section>
    )
}

export default Projects;