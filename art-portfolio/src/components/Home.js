import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeCard from './HomeCard';

const Home = () => {

    const [userInfo, setUserInfo] = useState([]);

useEffect( () => {
  axios.get('https://artportfoliobw.herokuapp.com/')
  .then(response => {
    console.log(response.data)
    return setUserInfo(response.data);
  })
}, [])

  return (
    <div>
      {userInfo.map((user) => <HomeCard user={user} />)}
    </div>
  );
};


export default Home;
