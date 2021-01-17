import React from "react";
import styled from "styled-components/macro";

const Div = styled.div`
max-width: 1200px;
border: 2px solid #00D4FF;
border-radius: 20px;
box-shadow: 0 0 20px;
background-color: none;
`;

const Card = () => {
    return(
        <Div>
            <div>
            <H1></H1>
            <h2></h2>
            </div>
            <img></img>
            <p></p>
            <p></p>
        </Div>
    )
}

export default Card;