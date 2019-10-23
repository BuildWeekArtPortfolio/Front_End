import React, { useState, useEffect } from "react";
import axios from 'axios';
import AboutCard from './AboutCard';

const AboutUs = () => {

const [photos, setPhotos] = useState([]);

useEffect( () => {
  axios.get('https://art-po-bw.herokuapp.com/')
  .then(response => {
    console.log(response.data)
    return setPhotos(response.data);
  })
}, [])

  return (
    <div>
      {photos.map((person) => <AboutCard person={person} key={Math.random()} />)}
    </div>
  );
};

export default AboutUs;
