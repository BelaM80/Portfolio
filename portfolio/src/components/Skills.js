import styled from "styled-components/macro";
import Section from "./Section";


const H3 = styled.h3`
width: 50%;
`;

const P = styled.p`
max-width: 100%;
`;



const Skills = () => {
    return(
        <Section id="skills">
                <h1>Skills</h1>
               
                <H3>Tech Stack</H3>
                
                <P>HTML5 | CSS3 | Javascript | React | React-three-fibre | 
                    three | drei | styled-components | git | npm | node | express | storybook | mongoDB  
                </P>
                <H3>Design</H3>
                <P>
                 UI/UX | Web | Exhibition | 3D | Animation | Cinema4D | Vectorworks | AdobeXD | Photoshop | InDesign | Illustrator  
                </P>
        </Section>
    )
}

export default Skills;