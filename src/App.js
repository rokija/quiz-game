import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import UserListContainer from "./containers/UserListContainer";
import QuizContainer from "./containers/QuizContainer";
import ManageQuizzContainer from "./containers/ManageQuizzContainer";
import QuizStatisticsContainer from "./containers/QuizStatisticsContainer";
import ResultsContainer from "./containers/ResultsContainer";
import QuestionContainer from "./containers/QuestionContainer/QuestionContainer";
import QuestionsListContainer from "./containers/QuestionsListContainer";
import ManageQuestionsContainer from "./containers/ManageQuestionsContainer";
import ManageUserContainer from "./containers/ManageUserContainer";
import QuizResultsContainer from "./containers/QuizResultsContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route exact path="/quizzes/:quizId/edit/questions/create" component={ManageQuestionsContainer} />
          <Route exact path="/quizzes/:quizId/edit/questions/:questionId" component={ManageQuestionsContainer} />
          <Route exact path="/quizzes/:quizId/edit/questions" component={QuestionsListContainer} />
          <Route exact path="/quizzes/:quizId/questions/:questionId" component={QuestionContainer} />
          <Route exact path="/quizzes/:quizId/edit/" component={ManageQuizzContainer} />
          <Route exact path="/quizzes/create" component={ManageQuizzContainer} />
          <Route exact path="/quizzes" component={QuizContainer} />
          <Route exact path="/results/statistics/quizzes/:quizId" component={QuizStatisticsContainer} />
          <Route exact path="/results/my/quizzes/:quizId" component={QuizResultsContainer} />
          <Route exact path="/results/statistics" component={QuizStatisticsContainer} />
          <Route exact path="/results" component={ResultsContainer} />
          <Route exact path="/users/:userId" component={ManageUserContainer} />
          <Route exact path="/users" component={UserListContainer} />
          <Route exact path="/profile" component={ManageUserContainer} />
        </Switch>
      </MainLayout>
    );
  }
}
export default App;
