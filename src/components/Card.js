import React from "react";
import "./Card.css";

const Card = ({ children }) => {
  return (
    <div className="card bg-light-green dib br3 pa4 ma2 grow bw2 shadow-5 tc">
      {children}
    </div>
  );
};

export default Card;
