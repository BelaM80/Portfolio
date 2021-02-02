import styled from "styled-components/macro";


const Nav = styled.div`
color: var(--secondary-color);
background-color: var(--primary-color);
border-radius: 50px;
font-family: var(--head-font);
font-size: 1.4rem;
padding: 0.5rem;
margin: 0.5rem 0 2.5rem;
display: flex;
width: 100%;
position: sticky;
top: 0.5rem;
@media (max-width: 900px) {
    visibility: hidden;
    margin: 0;
}
a {
    text-decoration: none;
    font-family: var(--head-font);
    color: var(--secondary-color);
}
ul {
    display: flex;
    @media (max-width: 900px) {
        display: inline;
    }
    text-decoration: none;
    list-style: none;
    margin: 0;
    
}
li {
    margin-left: 1rem;
    @media (max-width: 900px) {
        
        padding: 0.2rem 0;
    }

}
div {
    height: fit-content;
    display: flex;
}

`;

const Content = styled.div`
width: clamp(150px, 50vw, 1150px);
justify-content: space-evenly;
margin: 0 auto;
font-size: 1rem;
`;

const Navbar = () => {

    return(
        <Nav>
            <Content>
            <div><a href="#bela">Béla Müller</a></div>
            <ul>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </Content>
        </Nav>
    )
}

export default Navbar;