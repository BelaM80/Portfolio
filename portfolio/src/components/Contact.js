import styled from "styled-components/macro";
import email from "../assets/email.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import xing from "../assets/xing.png";



const Section = styled.section`
width: 45%;
border: 2px solid var(--primary-color);
border-radius: 20px;
box-shadow: 0 0 20px var(--primary-color), inset 0 0 20px var(--primary-color);
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
        <Section id="contact">
            <h1>Contact</h1>
            <Div>
               <a href="mailto: mueller.bela@gmx.de" ><img src={email} alt="email"/></a>
                <a href="https://github.com/BelaM80" target="_blank" rel="noreferrer"><img src={github} alt="github"/></a>
                <a href="https://www.xing.com/profile/BelaLars_Mueller/cv" target="_blank" rel="noreferrer"><img src={xing} alt="xing"/></a>
                <a href="https://www.linkedin.com/in/b%C3%A9la-m%C3%BCller-580109164/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin"/></a>
            </Div>
            <p>Phone: +49 177/310 80 58</p>
        </Section>
    )
}

export default Contact;