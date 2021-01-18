import styled from "styled-components/macro";


const Nav = styled.div`
width: 100%;
background-color: var(--primary-color);
border-radius: 50px;
`;


const Navbar = () => {

    return(
        <Nav>
            <span>Béla Müller</span>
        </Nav>
    )
}

export default Navbar;