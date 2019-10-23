import React from 'react';

const HomeCard = (props) => {

    return (
        <div>
            <h1>
                {props.photos.map((person) => {
                return <p>{person.fname} {person.lname} {person.email}</p>
                })}
            </h1>
        </div>
    )
}

export default HomeCard;