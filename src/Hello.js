import React from "react";
import "./Hello.css";

function Hello({ greeting }) {
  return (
    <div className="f1 tc">
      <h1>Hello, World</h1>
      <p>{greeting}</p>
    </div>
  );
}

export default Hello;
