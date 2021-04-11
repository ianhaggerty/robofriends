import React from "react";
import Card from "./Card";
import "./CartList.css";

const CardList = ({ robots }) => {
  return (
    <div className="cardlist">
      {robots.map((robot) => (
        <Card
          id={robot.id}
          key={robot.id}
          name={robot.name}
          email={robot.email}
        />
      ))}
    </div>
  );
};

export default CardList;
