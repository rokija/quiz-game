import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Login from "./components/Login/Login";
<<<<<<< HEAD
import QuizzContainer from "./containers/QuizzContainer";
=======
import UserList from "./components/UserList/UserList";
import Quizzes from "./components/Quizzes/Quizzes";
>>>>>>> 43014e16bc0b2e15ec6e2906e00fba4b1188ffb7

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
<<<<<<< HEAD
          <Route exact path="/quizzes/create" component={QuizzContainer} />
=======
          <Route exact path="/users" component={UserList} />
          <Route exact path="/quizzes" component={Quizzes} />
>>>>>>> 43014e16bc0b2e15ec6e2906e00fba4b1188ffb7
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
