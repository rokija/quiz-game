import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom"
import MainLayout from './components/MainLayout/MainLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainLayout >
          <ul>
            <li>
              <Link to="/quizzes/create">AddQuiz</Link>
            </li>
          </ul>
        </MainLayout>
      </div>
    );
  }
}
export default App;
