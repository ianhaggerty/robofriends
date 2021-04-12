import React from "react";
import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import { delay } from "../utility";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        delay(2000).then(() => this.setState({ robots: users }));
      });
  };

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { searchField, robots } = this.state;
    const filteredRobots = robots.filter((robots) => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="app tc courier">
        <h1 className="f1">Robofriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} loading={!robots.length} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
