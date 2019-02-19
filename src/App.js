import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer"
import Main from './components/Main/Main';
import Header from "./components/Header/Header";

class App extends Component {
  render() {
      return (
          <div className="App">
              <div className="App__content">
                  <div className="Header">
                     <Header />
                  </div>
                  <div className="Main">
                      <Main />
                  </div>
              </div>
              <Footer />
          </div>
      );
  }
}

export default App;
