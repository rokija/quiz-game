import React, { Component } from "react";
import "./App.css";
import Quizzes from "./components/Quizzes/Quizzes";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Quizzes/>
      </React.Fragment>
    )
  }
}

export default App;
