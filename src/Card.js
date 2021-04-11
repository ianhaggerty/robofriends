import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-green dib br3 pa4 ma2 grow bw2 shadow-5 tc">
      <img src={`https://robohash.org/${id}`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
