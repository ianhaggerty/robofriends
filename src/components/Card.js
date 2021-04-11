import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="card bg-light-green dib br3 pa4 ma2 grow bw2 shadow-5 tc">
      <img src={`https://robohash.org/${id}`} alt="robots" />
      <div>
        <h2 className="f3">{name}</h2>
        <p className="f5">{email}</p>
      </div>
    </div>
  );
};

export default Card;
