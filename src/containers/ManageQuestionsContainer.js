import React, { Component } from "react";
import AddQuestion from "../components/AddQuestion/AddQuestion.js";
import { connect } from "react-redux";
import { postQuestion } from "../redux/actions/questionActions";

export class ManageQuestionsContainer extends Component {
  render() {
    const {
      postQuestion,
      history,
      match: {
        params: { quizId }
      }
    } = this.props;

    return (
      <AddQuestion
        history={history}
        quizId={quizId}
        postQuestion={postQuestion}
      />
    );
  }
}

const mapDispatchToProps = {
  postQuestion
};

export default connect(
  null,
  mapDispatchToProps
)(ManageQuestionsContainer);
