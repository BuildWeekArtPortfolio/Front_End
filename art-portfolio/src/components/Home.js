import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeCard from "./HomeCard";
import UploadPost from "./UploadPost";

const Home = () => {
  const [userInfo, setUserInfo] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("https://artportfoliobw.herokuapp.com/").then(response => {
      console.log(response.data);
      return setUserInfo(response.data);
    });
  }, []);

  return (
    <div>
      {token != null ? <UploadPost /> : <div></div>}
      {userInfo.map(user => (
        <HomeCard user={user} />
      ))}
      {userInfo.map(user => (
        <HomeCard user={user} key={Math.random()} />
      ))}
    </div>
  );
};

export default Home;
