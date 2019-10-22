import React from "react";

const AboutCard = props => {
  console.log("props.photos.fname", props.photos.fname);
  return (
    <div>
      <h1>
        {props.photos.map(obj => {
          console.log("obj", obj);
        })}
      </h1>
    </div>
  );
};

export default AboutCard;
