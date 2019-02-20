import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import MainLayout from './components/MainLayout/MainLayout';

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <MainLayout >
        <ul>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        </MainLayout>
      </div>
    );
  }
}
export default App;
