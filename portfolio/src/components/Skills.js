import styled from "styled-components/macro";


const Section = styled.section`
max-width: 45%;
border: 2px solid #00D4FF;
border-radius: 20px;
box-shadow: 0 0 20px #00D4FF, inset 0 0 20px #00D4FF;
margin-bottom: 7rem;
background: none;
padding: 1rem;

div {
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;

}
h3{
    font-family: var(--head-font);
    border: 2px solid var(--primary-color);
    border-radius: 50px;
    padding: 0.5rem 1rem;
    width:50%;
    
}
`;

const P = styled.p`
max-width: 100%;
`;



const Skills = () => {
    return(
        <Section>
                <h1>Skills</h1>
                <div>
                <h3>Tech Stack</h3>
                </div>
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