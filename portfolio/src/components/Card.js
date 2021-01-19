import styled from "styled-components/macro";
import Bela from "../assets/Bela.png";

const Section = styled.section`
max-width: 45%;
border: 2px solid var(--primary-color);
border-radius: 20px;
box-shadow: 0 0 20px var(--primary-color), inset 0 0 20px var(--primary-color);
margin-bottom: 7rem;
background: none;
padding: 1rem;
img {
    box-shadow: 0 0 10px var(--primary-color);
    border-radius: 20px;
}
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

const Card = () => {
    return(
        <Section>
            <Div>
              <div id="bela">
                <h1 >Béla Müller</h1>
                <h2>Web Developer</h2>
            <P>I’m a Frontend Web Developer with a big crush on 3D Designs in Web and anywhere else.</P>
              </div>
              <img src={Bela} alt="Bela Müller" width="237" height="237"/>
            </Div>
            <p>Coming from Exhibition Design, I tried something new in 2020. I learned HTML and CSS. Soon I recognized, that I really enjoy coding and after writing Websites only with HTML, 
                I had the desire to dive deeper into coding and learn programming as soon as possible. <br />
            So after I passed a small coding challenge, I attended the neuefische bootcamp in the end of 2020 and became a Web Developer. 🚀🚀🚀<br /> 
            I´m open for Jobs as frontend developer around Düsseldorf, Ruhrgebiet or remote.</p>
        </Section>
    )
}

export default Card;