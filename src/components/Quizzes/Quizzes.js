import React, { Component } from "react";
import Quiz from "./Quiz";
import MainLayout from "../MainLayout/MainLayout";
import "./Quizzes.css";

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

class Quizzes extends Component {
  render() {
    return (
      <MainLayout>
        <div className="Quizzes">
          <div className="Quizzes__content">
            {quizzes.map((quiz, i) => (
              <Quiz
                key={i}
                title={quiz.title}
                description={quiz.description}
                user={user}
              />
            ))}
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default Quizzes;
