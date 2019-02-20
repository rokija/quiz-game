import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Login from "./components/Login/Login";
import Results from './components/Results/Results'
import QuestionList from "./components/Results/QuestionList/QuestionList";
import * as serviceWorker from "./serviceWorker";
import UserList from "./components/UserList/UserList";
import Quizzes from "./components/Quizzes/Quizzes";

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/results/questions" component={QuestionList} />
          <Route exact path="/users" component={UserList} />
          <Route exact path="/quizzes" component={Quizzes} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();