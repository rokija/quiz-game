import React, { Component } from "react";
import Quiz from "./Quiz";
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

class Quizzes extends Component {
  render() {
    return (
      <div className="Quizzes">
        <div className="Quizzes__content">
          {quizzes.map((quiz, i) => (
            <Quiz
              key={i}
              title={quiz.title}
              description={quiz.description}
              isAdmin={quiz.isAdmin}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Quizzes;
