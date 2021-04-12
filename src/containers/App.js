import React, { useState, useEffect } from "react";

import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";

import { connect } from "react-redux";
import { setSearchField } from "../actions";

import { delay } from "../utility";

import "./App.css";

function App({ onSearchChange, searchField }) {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => delay(2000, users))
      .then(setRobots);
  }, []);

  const filteredRobots = robots.filter((robots) => {
    return robots.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="app tc courier">
      <h1 className="f1">Robofriends</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} loading={!robots.length} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchField: state.searchField,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: ({ target: { value } }) => dispatch(setSearchField(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
