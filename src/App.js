import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="App">React App</div>
      </React.Fragment>
    )
  }
}

export default App;