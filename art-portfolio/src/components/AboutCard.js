import React from "react";
import styled from "styled-components";

const Main = styled.div`
  margin: 20px auto 50px auto;
  width: 50%;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: none;
  border-radius: 0.5rem;
  border-color: #c4c4c4;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px hsla(0, 0%, 76.9%, 0.4);
  margin-top: 20px;
`;

const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
`;
const CardTitle = styled.div`
  text-transform: capitalize;
  font-weight: 600;
`;
const CardSubtitle = styled.div`
  margin-top: 10px;
  font-size: 14px;
  text-transform: capitalize;
  color: #787878;
  a {
    text-decoration: none;
    color: #00b1ff;
  }
`;

const AboutCard = props => {
  console.log("props", props);
  return (
    <Main>
      <Card>
        <CardBody>
          <CardTitle>
            <img src={props.person.avatar} />
          </CardTitle>
          <img src={props.person.src} />

          <CardTitle>
            {props.person.fname}
            {props.person.lname}
          </CardTitle>

          <CardSubtitle>{props.person.likes}</CardSubtitle>
          <CardSubtitle>{props.person.description}</CardSubtitle>
        </CardBody>
      </Card>
    </Main>
  );
};

export default AboutCard;
