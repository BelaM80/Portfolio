import styled from "styled-components/macro";
import Section from "./Section";


const Div = styled.div`
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
`;

const P = styled.p`
max-width: 100%;
`;



const Skills = () => {
    return(
        <Section id="skills">
                <h1>Skills</h1>
                <Div>
                <h3>Tech Stack</h3>
                </Div>
                <P>HTML5 | CSS3 | Javascript | React | React-three-fibre | 
                    three | drei | styled-components | git | npm | node | express | storybook | mongoDB  
                </P>
                <h3>Design</h3>
                <P>
                 UI/UX | Web | Exhibition | 3D | Animation | Cinema4D | Vectorworks | AdobeXD | Photoshop | InDesign | Illustrator  
                </P>
        </Section>
    )
}

export default Skills;