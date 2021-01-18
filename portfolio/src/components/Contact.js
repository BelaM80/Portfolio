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

const P = styled.p`
max-width: 100%;
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
                <img src={email} alt="email"/>
                <img src={github} alt="github"/>
                <img src={xing} alt="xing"/>
                <img src={linkedin} alt="linkedin"/>

            </Div>

        </Section>
    )
}

export default Contact;