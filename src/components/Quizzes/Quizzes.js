import React, { Component } from "react";
import Quiz from "./Quiz";
import { Button } from "reactstrap";
import "./Quizzes.css";

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
    const { quizzes, onStartQuizClick } = this.props;
    return (
      <div>
        <div className="Quizzes">
          <div className="Quizzes_createNewQuizzContainer">
            <Button className="Quizzes__createNewQuizz" color="success">
              Create New Quiz
          </Button>
          </div>
          <div className="Quizzes__content">
            {quizzes.map((quiz, i) => (
              <Quiz
                key={i}
                title={quiz.title}
                description={quiz.description}
                user={user}
                onStartQuizClick={onStartQuizClick}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Quizzes;
