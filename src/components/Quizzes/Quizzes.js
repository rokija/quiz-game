import React, { Component } from "react";
import Quiz from "./Quiz";
import "./Quizzes.css";

class Quizzes extends Component {
  render() {
    return (
      <div className="Quizzes">
        <div className="Quizzes__content">
          {this.props.quizzes.map((quiz, i) => (
            <Quiz
              key={i}
              title={quiz.title}
              description={quiz.description}
              user={this.props.user}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Quizzes;
