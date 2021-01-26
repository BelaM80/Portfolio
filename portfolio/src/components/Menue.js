import styled from "styled-components";

const StyledMenue = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--primary-color);
  height: 100%;
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  width: 80%;
  opacity: 90%;

  a {
    font-size: 1.8rem;
    padding: 1rem 0;
    color: var(--secondary-color);
    text-decoration: none;
    transition: color 0.3s linear;
    
   

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