import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import UserEdit from "./components/UserEdit/UserEdit"
class App extends React.Component {
  render() {
    return (
      // <React.Fragment>
      //   <Header />
      // </React.Fragment>
      <UserEdit />

    )
  }
}

export default App;