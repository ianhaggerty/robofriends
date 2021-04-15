import React, { useEffect } from "react";

import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";

import { connect } from "react-redux";
import { requestRobots, setSearchField } from "../store/actions";

import "./App.css";

function App({
  onSearchChange,
  searchField,
  requestRobots,
  robots,
  robotRequestError,
}) {
  useEffect(() => {
    requestRobots();
  }, [requestRobots]);

  const filteredRobots = robots.filter((robots) => {
    return robots.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="app tc courier">
      <h1 className="f1">Robofriends</h1>
      <SearchBox onSearchChange={onSearchChange} value={searchField} />
      <Scroll>
        <ErrorBoundary hasError={robotRequestError}>
          <CardList robots={filteredRobots} loading={!robots.length} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  robotRequestError: state.requestRobots.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: ({ target: { value } }) => dispatch(setSearchField(value)),
  requestRobots: () => dispatch(requestRobots()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
