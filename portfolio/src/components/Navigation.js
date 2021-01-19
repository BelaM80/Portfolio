import styled from "styled-components/macro";
import Button from "./Button";


const Nav = styled.div`
color: var(--secondary-color);
background-color: var(--primary-color);
border-radius: 50px;
font-family: var(--head-font);
font-size: 1.4rem;
padding: 0.5rem;
margin: 0.5rem 0 5rem;
display: flex;
justify-content: space-between center;
width: 100%;
position: sticky;
top: 0.5rem;
a {
    text-decoration: none;
    font-family: var(--head-font);
    color: var(--secondary-color);
}
ul {
    display: flex;
    text-decoration: none;
    list-style: none;
    margin: 0;
    
}
li {
    margin-left: 1rem;
}
div {
    height: fit-content;
    display: flex;
}
`;

const Content = styled.div`
width: 45%;
justify-content: space-between;
margin: 0 auto;
`;

const Navbar = () => {

    return(
        <Nav>
            <Content>
            <div><a href="#bela">Béla Müller</a></div>
            <ul>
                <a href="#projects"><li>Projects</li></a>
                <a href="#skills"><li>Skills</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
            <Button>Switch Color</Button>
            </Content>
        </Nav>
    )
}

export default Navbar;