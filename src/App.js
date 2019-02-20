import React, { Component } from "react";
import "./App.css";
import MainLayout from "./components/MainLayout/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import UserListContainer from "./containers/UsersListContainer";
import QuizzContainer from "./containers/QuizzContainer";
import QuizStatisticsContainer from "./containers/QuizStatisticsContainer";

class App extends Component {
  render() {
    return ( 
      <MainLayout>
        <ProtectedRoute exact path="/quizzes/:quizId/edit/questions/:questionId" component={App} />
        <ProtectedRoute exact path="/quizzes/:quizId/edit/questions/create" component={App} />
        <ProtectedRoute exact path="/quizzes/:quizId/edit/questions" component={App} />
        <ProtectedRoute exact path="/quizzes/:quizId/questions/:questionId" component={App} />
        <ProtectedRoute exact path="/quizzes/:quizId/edit/" component={App} />
        <ProtectedRoute exact path="/quizzes/create" component={App} />
        <ProtectedRoute exact path="/quizzes" component={QuizzContainer} />
        <ProtectedRoute exact path="/results/statistics/quizzes/:quizId" component={App} />
        <ProtectedRoute exact path="/results/my/quizzes/:quizId" component={App} />
        <ProtectedRoute exact path="/results/statistics" component={QuizStatisticsContainer} />
        <ProtectedRoute exact path="/results" component={App} />
        <ProtectedRoute exact path="/users/:userId" component={App} />
        <ProtectedRoute exact path="/users" component={UserListContainer} />
        <ProtectedRoute exact path="/profile" component={App} />
      </MainLayout>
    );
  }
}
export default App;
