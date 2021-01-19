import styled from "styled-components/macro";
import email from "../assets/email.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import xing from "../assets/xing.png";



const Section = styled.section`
width: 45%;
border: 2px solid #00D4FF;
border-radius: 20px;
box-shadow: 0 0 20px #00D4FF, inset 0 0 20px #00D4FF;
margin-bottom: 7rem;
background: none;
padding: 1rem;
`;



const Div = styled.div`
display: flex;
justify-content: space-between;
width: 30%;
margin: 1.5rem 0;
div {
    display: inline;
    
}
`;

const Contact = () => {
    return(
        <Section>
            <h1>Contact</h1>
            <Div>
               <a href="mailto: mueller.bela@gmx.de" ><img src={email} alt="email"/></a>
                <a href="https://github.com/BelaM80" target="_blank"><img src={github} alt="github"/></a>
                <a href="https://www.xing.com/profile/BelaLars_Mueller/cv" target="_blank"><img src={xing} alt="xing"/></a>
                <a href="https://www.linkedin.com/in/b%C3%A9la-m%C3%BCller-580109164/" target="_blank"><img src={linkedin} alt="linkedin"/></a>

            </Div>

        </Section>
    )
}

export default Contact;