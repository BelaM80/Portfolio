import styled from "styled-components/macro";

const Section = styled.section`
width: clamp(315px, 45vh, 1200px);
border: 2px solid var(--primary-color);
border-radius: 20px;
box-shadow: 0 0 20px var(--primary-color), inset 0 0 20px var(--primary-color);
margin-bottom: 7rem;
background: none;
padding: 0.5rem;
`;

export default Section;