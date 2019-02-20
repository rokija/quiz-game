import React, { Component } from "react";
import Footer from "../Footer/Footer"
import Header from "../Header/Header";
import "./MainLayout.css";

class MainLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="MainLayout">
          <div className="MainLayout__content">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default MainLayout;