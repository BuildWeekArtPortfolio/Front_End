import React, { useState, useEffect } from "react";
import axios from "axios";
import AboutCard from "./AboutCard";

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
    <div>
      {object.map(person => (
        <AboutCard person={person} key={Math.random()} />
      ))}
    </div>
  );
};

export default AboutUs;