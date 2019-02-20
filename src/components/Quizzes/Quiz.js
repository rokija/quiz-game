import React, { Component } from "react";
import "./Quiz.css";
import { Button } from "reactstrap";

class Quiz extends Component {
  constructor() {
    super();

    this.state = {
      showContent: false
    };
  }

  toggleContent = () => this.setState({ showContent: !this.state.showContent });

  render() {
    const { title, description, isAdmin } = this.props;
    const { showContent } = this.state;

    return (
      <div className="Quiz ">
        <h1 onClick={this.toggleContent} className="Quiz__header ">
          {title}
        </h1>
        {showContent && (
          <div className="Quiz__content">
            <div className="Quiz__content__description">{description}</div>
            {isAdmin && (
              <div className="Quiz__content__buttons">
                <Button
                  color="secondary"
                  className="Quiz__content__buttons__edit-button"
                >
                  Edit quiz
                </Button>
                <Button color="secondary">Add question</Button>
              </div>
            )}
            {!isAdmin && (
              <div className="Quiz__content__buttons">
                <Button color="secondary">Start quiz</Button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Quiz;
