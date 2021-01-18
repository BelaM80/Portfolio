import styled from "styled-components/macro";


const Foot = styled.footer`
color: var(--secondary-color);
background-color: var(--primary-color);
border-radius: 50px;
width: 100%;
padding: 0.5rem;
opacity: 40%;
`;

const Footer = () => {

    return(
        <Foot>
            <div>
                Impressum | Datenschutz
            </div>
        </Foot>
    )
}

export default Footer;