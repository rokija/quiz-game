import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Login from "./components/Login/Login";
import UserList from "./components/UserList/UserList";
import Quizzes from "./components/Quizzes/Quizzes";
import MainLayout from "./components/MainLayout/MainLayout";

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
          <MainLayout> 
          <Route exact path="/users" component={UserList} />
          <Route exact path="/quizzes" component={Quizzes} />

          </MainLayout>
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
