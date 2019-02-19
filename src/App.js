import React, { Component } from "react";
import "./App.css";
// import Login  from  "./components/Login/Login";
import ProgressBar from "./components/ProgressBar/ProgressBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProgressBar />
      </div>
    );
  }
}

export default App;
