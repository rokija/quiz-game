import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import ManageUserContainer from "./containers/ManageUserContainer";
import Login from "./components/Login/Login";
<<<<<<< HEAD
import Results from './components/Results/Results'
import QuestionList from "./components/Results/QuestionList/QuestionList";
import QuizzContainer from "./containers/QuizzContainer";
import UserList from "./components/UserList/UserList";
import Quizzes from "./components/Quizzes/Quizzes";
=======
>>>>>>> b2f016943dab63be2fc948a8ff5a141b0dc07082

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
<<<<<<< HEAD
          <Route exact path="/quizzes/:quizId/edit/questions/:questionId" component={App} />
          <Route exact path="/quizzes/:quizId/edit/questions/create" component={App} />
          <Route exact path="/quizzes/:quizId/edit/questions" component={App} />
          <Route exact path="/quizzes/:quizId/questions/:questionId" component={App} />
          <Route exact path="/quizzes/:quizId/edit/" component={App} />
          <Route exact path="/quizzes/create" component={QuizzContainer} />
          <Route exact path="/quizzes" component={Quizzes} />
          <Route exact path="/results/statistics/quizzes/:quizId" component={App} />
          <Route exact path="/results/my/quizzes/:quizId" component={QuestionList} />
          <Route exact path="/results/statistics" component={App} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/users/:userId" component={App} />
          <Route exact path="/users" component={UserList} />
          <Route exact path="/profile" component={App} />
          <Route exact path="/register" component={App} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={App} />
=======
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={ManageUserContainer} />
            <ProtectedRoute path="/*" component={App} />
>>>>>>> b2f016943dab63be2fc948a8ff5a141b0dc07082
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
