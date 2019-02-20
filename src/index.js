import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration"
// import Quizzes from "./components/Quizzes/Quizzes";
import QuizzContainer from "./containers/QuizzContainer";
import UserList from "./components/UserList/UserList";
import Quizzes from "./components/Quizzes/Quizzes";
import UserEdit from "./components/UserEdit/UserEdit"

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/quizzes/:quizId/edit/questions/:questionId" component={App} />
          <Route exact path="/quizzes/:quizId/edit/questions/create" component={App} />
          <Route exact path="/quizzes/:quizId/edit/questions" component={App} />
          <Route exact path="/quizzes/:quizId/questions/:questionId" component={App} />
          <Route exact path="/quizzes/:quizId/edit/" component={App} />
          <Route exact path="/quizzes/create" component={QuizzContainer} />
          <Route exact path="/quizzes" component={Quizzes} />
          <Route exact path="/results/statistics/quizzes/:quizId" component={App} />
          <Route exact path="/results/my/quizzes/:quizId" component={App} />
          <Route exact path="/results/statistics" component={App} />
          <Route exact path="/results" component={App} />
          <Route exact path="/users/:userId" component={UserEdit} />
          <Route exact path="/users" component={UserList} />
          <Route exact path="/profile" component={App} />
          <Route exact path="/register" component={Registration} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={App} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));


