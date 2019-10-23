import React from "react";

const AboutCard = props => {
  console.log("props.photos", props.photos);
  return (
    <div>
      <h1>
        {props.photos.map(person => {
          return (
            <p>
              {person.photos}
            </p>
          );
        })}
      </h1>
    </div>
  );
};

export default AboutCard;
