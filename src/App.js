import React, { Component } from "react";
import "./App.css";
import MainLayout from './components/MainLayout/MainLayout';
import { Route } from "react-router-dom";
import AddQuestion from "./components/AddQuestion/AddQuestion";


class App extends Component {
  render() {
    return (
      <div className="App">
        <MainLayout >
          <Route exact path="/addquestion" component={AddQuestion}/>
        </MainLayout>
      </div>
    );
  }
}
export default App;
