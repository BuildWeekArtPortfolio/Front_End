import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCardDiv = styled.div`
max-width: 400px;
width: 90%;
display: inline-block;
margin: 2%;
`

const StyledSpan = styled.span`
padding-left: 40px;
`

const StyledImg = styled.img`
border-radius: 50%;
width: 35px;
`

const StyledLrgImg = styled.img`
border-radius: 10px;
width: 90%;
`



const HomeCard = (props) => {

        const [likes, setLikes] = useState(props.user.likes)
        const [isLiked, setIsLiked] = useState(false)

        function likesFunction(e){
                e.preventDefault();
                setIsLiked(!isLiked)
                if(isLiked === false){
                        let oldState = likes
                        let newState = oldState + 1
                        return setLikes(newState)
                } else {
                        let oldState = likes
                        let newState = oldState - 1
                        return setLikes(newState)
                }
        } 

        return (
                <StyledCardDiv>
                        <StyledImg src={props.user.avatar} />
                        <StyledSpan />
                        {`${props.user.fname} ${props.user.lname}`}
                        <StyledSpan />
                        {}
                        <i className={isLiked === true ? "fas fa-heart" : "far fa-heart"} onClick={likesFunction}></i> 
                        {likes}
                        <br />
                        <StyledLrgImg src={props.user.src} />
                        <br />
                </StyledCardDiv>
        )
    }

export default HomeCard;