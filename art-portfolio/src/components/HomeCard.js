import React from 'react';
import styled from 'styled-components';

const StyledCardDiv = styled.div`
max-width: 400px;
width: 90%;
display: inline-block;
margin: 2%;
`
const StyledInnerCardDiv = styled.div`
background-color: rgba(255, 255, 255, 0.8);
border-radius: 10px;
padding: 10px 30px;
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
console.log("props", props)

        return (
                <StyledCardDiv>
                        <StyledImg src={props.user.avatar} />
                        <StyledSpan />
                        {`${props.user.fname} ${props.user.lname}`}
                        <StyledSpan />
                        <i class="far fa-heart"></i> 
                        {props.user.likes}
                        <br />
                        <StyledLrgImg src={props.user.src} />
                        <br />
                </StyledCardDiv>
        )
    }

export default HomeCard;