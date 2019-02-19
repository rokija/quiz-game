import React, { Component } from "react";
import "./App.css";
// import Layout from "./components/Layout/Layout"
// import Registration from "./components/Registration/Registration"
import Footer from "./components/Footer/Footer"
import Main from './components/Main/Main';


class App extends Component {
  render() {
      return (
          <div className="appSite">
              <div className="siteContent">
                  <div className="appHeader">
                     {/* <Header /> */}
                  </div>
                  <div className="main">
                      <Main />
                  </div>
              </div>
              <Footer />
          </div>
      );
  }
}

export default App;

