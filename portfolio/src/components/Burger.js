import styled from "styled-components";

const StyledBurger = styled.button`
  position: absolute;
  top: 4%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  visibility: hidden;

    @media (max-width: 900px) {
        visibility: visible;
    }
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({  open }) => open ? "var(--secondary-color)" : "var(--primary-color)"};
    border-radius: 10px;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

`;

const Burger = ({open, setOpen}) => {
    return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
    </StyledBurger>
    )
}



export default Burger;