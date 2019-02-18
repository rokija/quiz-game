import React, { Component } from "react";
import Header from './components/Header/Header';
import "./App.css";

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <div className="App">React App</div>
      <Header/>
    </React.Fragment>
    )
  }
}

export default App;
