import styled from "styled-components";

const StyledMenue = styled.nav`
display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--primary-color);
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  /* @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  } */

  a {
    font-size: 2rem;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    color: var(--secondary-color);
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: orange;
    }
  }

`;

const Menu = ({ open }) => {
    return(
        <StyledMenue open={open}>
        <a href="#bela">Béla Müller</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        </StyledMenue>
    )
}

export default Menu;