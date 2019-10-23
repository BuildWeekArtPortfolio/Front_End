import React from "react";
import styled from "styled-components";

const StyledCardDiv = styled.div`
  max-width: 700px;
  width: 70%;
  padding: 15px;
  margin: 0, auto;
  border: 1px solid black;
`

const AboutCard = props => {
  console.log("props", props);
  return (
    <StyledCardDiv>
      {props.person.fname}
      {props.person.lname}
      <img src={props.person.avatar} />
      <img src={props.person.src} />
      {props.person.likes}
      {props.person.description}
    </StyledCardDiv>
  );
};

export default AboutCard;
