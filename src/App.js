import React, { Component } from "react";
import "./App.css";
import MainLayout from './components/MainLayout/MainLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainLayout >
          {/* --------------------------------
          There goes a content!
          -------------------------------- */}
        </MainLayout>
      </div>
    );
  }
}
export default App;
