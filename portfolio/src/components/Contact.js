import styled from "styled-components/macro";
import email from "../assets/email.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import xing from "../assets/xing.png";
import Section from "./Section";

const Div = styled.div`
display: flex;
justify-content: space-between;
width: 30%;
margin: 1.5rem 0;

`;

const Contact = () => {
    return(
        <Section id="contact">
            <h1>Contact</h1>
            <Div>
               <a href="mailto: mail@belamueller.de" ><img src={email} alt="email"/></a>
                <a href="https://github.com/BelaM80" target="_blank" rel="noreferrer"><img src={github} alt="github"/></a>
                <a href="https://www.xing.com/profile/BelaLars_Mueller/cv" target="_blank" rel="noreferrer"><img src={xing} alt="xing"/></a>
                <a href="https://www.linkedin.com/in/b%C3%A9la-m%C3%BCller-580109164/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin"/></a>
            </Div>
            <a href="tel:+49 177/310 80 58">Phone: +49 177/310 80 58</a>
        </Section>
    )
}

export default Contact;