import React, { Component } from "react";
import Quiz from "./Quiz";
import "./Quizzes.css";

// const quizzes = [
//   {
//     title: "First Quiz",
//     description: "Description about quiz",
//     isAdmin: false,
//     id:0,
//   },
//   {
//     title: "Second Quiz",
//     description: "Description about quiz",
//     isAdmin: true,
//     id:1,
//   },
//   {
//     title: "Third Quiz",
//     description: "Description about quiz",
//     isAdmin: false,
//     id:2,
//   },
//   {
//     title: "Fourth Quiz",
//     description: "Description about quiz",
//     isAdmin: true,
//     id:3,
//   },
//   { title: "Fifth Quiz", description: "Description about quiz", isAdmin: false }
// ];

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
    const {quizzes}=this.props;
    return (
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
    );
  }
}

export default Quizzes;
