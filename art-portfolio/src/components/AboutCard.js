import React, { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  margin: 20px auto 50px auto;
  width: 50%;
  padding-top: 5px;
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
  color: #00b1ff;
`;
const CardSubtitle = styled.div`
  margin-top: 10px;
  font-size: 14px;
  text-transform: capitalize;
  color: #003452;
  font-weight: bold;
  a {
    text-decoration: none;
    color: #00b1ff;
  }
`;

const Button = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid gold;
  border-radius: 3px;
`;

const AboutCard = props => {
  console.log("propys", props);
  const [likes, setLikes] = useState(props.person.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [desc, setDesc] = useState(props.person.description);
  const [shown, isShown] = useState(false);

  function likesFunction(e) {
    e.preventDefault();

    setIsLiked(!isLiked);
    if (isLiked === false) {
      let oldState = likes;
      let newState = oldState + 1;
      return setLikes(newState);
    } else {
      let oldState = likes;
      let newState = oldState - 1;
      return setLikes(newState);
    }
  }

function descFunction(e) {
  e.preventDefault() 
  console.log('desc', desc);
}

  

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

          <CardSubtitle>
            Likes<Button onClick={likesFunction}>{likes}</Button>
          </CardSubtitle>

          <CardSubtitle onClick={descFunction}><Button>Description</Button></CardSubtitle>
          {/* {props.person.description} */}
        </CardBody>
      </Card>
    </Main>
  );
};

export default AboutCard;
