import React, { useState } from "react";
import styled from "styled-components";
import EditPost from "./EditPost.js";

const StyledCardDiv = styled.div`
  max-width: 400px;
  width: 90%;
  display: inline-block;
  align-items: center;
  padding: 20px;
`;

const StyledSpan = styled.span`
  padding-left: 40px;
`;

const StyledImg = styled.img`
  border-radius: 50%;
  width: 35px;
`;

const StyledLrgImg = styled.img`
  border-radius: 10px;
  width: 90%;
`;

const DescriptionSection = styled.div`
  margin: 25px auto;
`;

const HomeCard = props => {
  const [likes, setLikes] = useState(props.user.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(props.user.description);

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

  function descriptionFunction(e) {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  }

  function toggleIsEditing(e) {
    e.preventDefault();
    setIsEditing(!isEditing);
  }

  return (
    <StyledCardDiv>
      <div>
        <StyledImg src={props.user.avatar} alt="avatar" />
        <StyledSpan />
        {`${props.user.fname} ${props.user.lname}`}
        <StyledSpan />
        <i
          className={isLiked === true ? "fas fa-heart" : "far fa-heart"}
          onClick={likesFunction}
        ></i>
        {likes}
      </div>
      <StyledLrgImg src={props.user.src} alt="main-artwork" />
      <button onClick={descriptionFunction} className="alliesbutton">
        Description
      </button>
      <div>
        <DescriptionSection>
          <div
            className={
              isExpanded === true && isEditing === false
                ? "display"
                : "nodisplay"
            }
          >
            {description}
          </div>
          <div
            className={
              isExpanded === true && isEditing === true
                ? "display"
                : "nodisplay"
            }
          >
            <EditPost
              setDescription={setDescription}
              setIsEditing={setIsEditing}
            />
          </div>
        </DescriptionSection>
        <button
          onClick={toggleIsEditing}
          className={
            isExpanded === true && props.token !== null
              ? "display alliesbutton"
              : "nodisplay"
          }
        >
          Edit Post
        </button>
      </div>
    </StyledCardDiv>
  );
};

export default HomeCard;
