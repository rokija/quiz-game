import React, { Component } from "react";
import "./Quiz.css";
import { Button } from "reactstrap";
import { hasAccessLevel, MODERATOR, USER } from "../../AccessControl/index";
import { Link } from "react-router-dom";

class Quiz extends Component {
  constructor() {
    super();

    this.state = {
      showContent: false
    };
  }

  toggleContent = () => this.setState({ showContent: !this.state.showContent });
  onAddQuiz = () => console.log("Add quiz");
  onDeleteQuiz = () => console.log("Delete quiz");
  onStartQuiz = () => console.log("Start quiz");

  render() {
    const { title, description, user, ownerId, onAddQuiz, onDeleteQuiz } = this.props;
    const { showContent } = this.state;

    return (
      <div className="Quiz ">
        <h1 onClick={this.toggleContent} className="Quiz__header ">
          {title}
        </h1>
        {showContent && (
          <div className="Quiz__content">
            <div className="Quiz__content__description">{description}</div>
            {(hasAccessLevel(user, MODERATOR) || user.id === ownerId) && (
              <div className="Quiz__content__buttons">
                <Link to="/quizzes/create">
                  <Button
                    color="secondary"
                    className="Quiz__content__buttons__edit-button"
                  >
                    Edit quiz
                  </Button>
                </Link>
                <Button
                  className="Quiz__content__buttons__add-button"
                  onClick={onAddQuiz}
                  color="secondary"
                >
                  Add question
                </Button>
                <Button
                  className="Quiz__content__buttons__delete-button"
                    onClick={onDeleteQuiz}
                  color="secondary"
                >
                  Delete quiz
                </Button>
              </div>
            )}
            {hasAccessLevel(user, USER) && (
              <div className="Quiz__content__buttons">
                <Button onClick={() => this.onStartQuiz()} color="secondary">
                  Start quiz
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Quiz;
