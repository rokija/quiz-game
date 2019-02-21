import React, { Component } from "react";
import "./Quiz.css";
import { Button } from "reactstrap";
import { hasAccessLevel, MODERATOR, USER } from "../../AccessControl/index";

class Quiz extends Component {
  constructor() {
    super();

    this.state = {
      showContent: false
    };
  }

  toggleContent = () => this.setState({ showContent: !this.state.showContent });
  onButtonClick = () => console.log("i click a button");
  onEdittQuiz = () => console.log("Edit quiz");
  onAddtQuiz = () => console.log("Add quiz");
  onDeletetQuiz = () => console.log("Delete quiz");
  onStartQuiz = () => console.log("Start quiz");

  render() {
    const { title, description, user, ownerId } = this.props;
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
                <Button
                  onClick={() => this.onEdittQuiz()}
                  color="secondary"
                  className="Quiz__content__buttons__edit-button"
                >
                  Edit quiz
                </Button>
                <Button
                  className="Quiz__content__buttons__add-button"
                  onClick={() => this.onAddtQuiz()}
                  color="secondary"
                >
                  Add question
                </Button>
                <Button
                  className="Quiz__content__buttons__delete-button"
                  onClick={() => this.onDeletetQuiz()}
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
