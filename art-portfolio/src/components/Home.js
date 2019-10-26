import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeCard from './HomeCard';
import UploadPost from './UploadPost';

const Home = () => {

    const [userInfo, setUserInfo] = useState([]);

useEffect( () => {
  axios.get('https://artportfoliobw.herokuapp.com/')
  .then(response => {
    return setUserInfo(response.data);
  })
}, [])

  return (
    <div>
    <UploadPost />
      {userInfo.map((user) => <HomeCard user={user} key={Math.random()} />)}
    </div>
  );
};


export default Home;
