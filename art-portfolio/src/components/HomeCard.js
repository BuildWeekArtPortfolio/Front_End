import React from 'react';
import styled from 'styled-components';

const StyledCardDiv = styled.div`
max-width: 700px;
width: 70%;
padding: 15px;
margin: 0 auto;
border: 1px solid black;
`

const StyledSpan = styled.span`
padding-left: 40px;
`

const HomeCard = (props) => {
console.log("props", props)

        return (
                <StyledCardDiv>
                    <img src={props.person.avatar} />
                    <StyledSpan />
                    {`${props.person.fname} ${props.person.lname}`}
                    <br />
                    <img src={props.person.src} />
                    <br />
                    {props.person.likes}
                    {props.person.description}
                </StyledCardDiv>
        )
    }

export default HomeCard;