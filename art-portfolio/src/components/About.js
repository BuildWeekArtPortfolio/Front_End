import React, { useState, useEffect } from "react";
import axios from "axios";
import AboutCard from "./AboutCard";
import styled from "styled-components";

const Body = styled.section`
background-color: #002438;
`;

const AboutUs = () => {
  const [person, setPerson] = useState([]);

  useEffect( () => {
    axios.get('https://artportfoliobw.herokuapp.com/')
    .then(response => {
      console.log(response.data)
      return setPerson(response.data);
    })
  }, [])

  return (
    <Body>
      {person.map(person => (
        <AboutCard person={person} key={Math.random()} />
      ))}
    </Body>
  );
};

export default AboutUs;