import React from "react";
import styled from "styled-components";

let Card = styled.div
`
border: 2px solid black;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

let UserCard = (props) => {
  return (
    <Card>
    {console.log("usercard data working", props.cardData)}
        <h1>{props.cardData.name}</h1>
        <h2>{props.cardData.login}</h2>
        <img src={props.cardData.avatar_url} width="200px"/>
    </Card>
  );
};

export default UserCard;