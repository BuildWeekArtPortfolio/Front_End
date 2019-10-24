import React, { useState, useEffect } from "react";
import axios from "axios";
import AboutCard from "./AboutCard";
import styled from "styled-components";

const Body = styled.section`
background-color: #002438;
`;

const AboutUs = () => {
  const [object, setObject] = useState([]);

  useEffect( () => {
    axios.get('https://artportfoliobw.herokuapp.com/')
    .then(response => {
      console.log(response.data)
      return setObject(response.data);
    })
  }, [])

  return (
    <Body>
      {object.map(person => (
        <AboutCard person={person} key={Math.random()} />
      ))}
    </Body>
  );
};

export default AboutUs;