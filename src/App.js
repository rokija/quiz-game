import React, { Component } from "react";
import "./App.css";
import Quizzes from "./components/Quizzes/Quizzes";

class App extends Component {
  render() {
    return <div className="App">
    <Quizzes/>
    </div>;
  }
}

export default App;

