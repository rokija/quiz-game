import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/quizzes/create">AddQuiz</Link>
          </li>
        </ul>
      </div>

    )
  }
}

export default App;
