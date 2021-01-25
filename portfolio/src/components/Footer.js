import styled from "styled-components/macro";


const Foot = styled.footer`
color: var(--secondary-color);
background-color: var(--primary-color);
border-radius: 50px;
width: 98%;
padding: 0.5rem;
opacity: 40%;
display: grid;
place-items: center;

a {
    text-decoration: none;
    color: var(--secondary-color);
}
`;

const Footer = () => {

    return(
        <Foot>
            <div>
                <a href="https://muellersdesign.de/impressum.html">Impressum</a> | <a href="https://muellersdesign.de/datenschutz.html">Datenschutz</a>
            </div>
        </Foot>
    )
}

export default Footer;