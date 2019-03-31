import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/Movie/MovieList";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedYear: 2018
    };

    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(year) {
    this.setState({ selectedYear: year });
    // console.log("Component APP", year);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Header yearSelection={this.handleSelection} />
            <MovieList selectedYear={this.state.selectedYear} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
