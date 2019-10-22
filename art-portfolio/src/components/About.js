import React, { useState, useEffect } from "react";
import axios from 'axios';
import AboutCard from './AboutCard';

const About = () => {

const [photos, setPhotos] = useState([]);

useEffect( () => {
  axios.get('https://artportfoliobw.herokuapp.com/')
  .then(response => {
    console.log(response.data)
    return setPhotos(response.data);
  })
}, [])

  return (
    <div>
      {photos.map(() => <AboutCard photos={photos} />)}
    </div>
  );
};

export default About;
 

//map over array 
//map objects inside the arrays 0-20 