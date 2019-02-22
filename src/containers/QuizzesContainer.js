import React, { Component } from "react";
import { connect } from "react-redux";
import Quizzes from "../components/Quizzes/Quizzes";
import { getQuizzes } from "../redux/actions/quizActions";
import { Spinner } from "reactstrap";

export class QuizzesContainer extends Component {
  componentDidMount() {
    this.props.getQuizzes();
  }

  onStartQuizClick = (quizId) => {
    for (let q of this.props.quizzes) {
      if (q._id === quizId)
        this.props.history.push(`/quizzes/${quizId}/questions/${q.questions[0]}`);
        return
    }
  }

  render() {
    if (!this.props.quizzes) {
      return (
        <div>
          <Spinner />
        </div>)
    }
    return <Quizzes onStartQuizClick={this.onStartQuizClick} quizzes={this.props.quizzes} />
  }
}

const mapStateToProps = state => {
  return {
    quizzes: state.quizesReducer.quizzes
  };
};

const mapDispatchToProps = {
  getQuizzes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizzesContainer);
