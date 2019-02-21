import React, { Component } from "react";
import Quizzes from "../components/Quizzes/Quizzes";

const quizzes = [
  {
    title: "First Quiz",
    description: "Description about quiz",
    isAdmin: false
  },
  {
    title: "Second Quiz",
    description: "Description about quiz",
    isAdmin: true
  },
  {
    title: "Third Quiz",
    description: "Description about quiz",
    isAdmin: false
  },
  {
    title: "Fourth Quiz",
    description: "Description about quiz",
    isAdmin: true
  },
  { title: "Fifth Quiz", description: "Description about quiz", isAdmin: false }
];

const user = {
  username: "lalal",
  email: "emai",
  hashedPassword: "string",
  name: "string",
  surname: "string",
  dateOfBirth: "2019-02-20",
  level: "admin",
  id: 0
};
export class QuizContainer extends Component {
  render() {
    return <Quizzes quizzes={quizzes} user={user} />;
  }
}

export default QuizContainer;
