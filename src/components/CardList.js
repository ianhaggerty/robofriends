import React from "react";
import Card from "./Card";
import "./CartList.css";
import BeatLoader from "react-spinners/BeatLoader";
import { integerArray } from "../utility";

const CardList = ({ robots, loading }) => {
  if (loading) {
    return (
      <div className="cardlist">
        {/* TODO Hardcoded # of loading elements here*/}
        {integerArray(8).map((i) => (
          <Card key={i}>
            <BeatLoader loading={true} color="white" />
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="cardlist">
      {robots.map((robot) => (
        <Card key={robot.id}>
          <img src={`https://robohash.org/${robot.id}`} alt="robots" />
          <div>
            <h2 className="f3">{robot.name}</h2>
            <p className="f5">{robot.email}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CardList;
