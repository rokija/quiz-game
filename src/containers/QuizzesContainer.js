import React, { Component } from "react";
import { connect } from "react-redux";
import Quizzes from "../components/Quizzes/Quizzes";
import { getQuizzes } from "../redux/actions/quizActions";
import { Spinner } from "reactstrap";

export class QuizzesContainer extends Component {
  componentDidMount() {
    this.props.getQuizzes();
  }

  onStartQuizClick = () => {
    this.props.history.push("/quizzes/:quizId/questions/:questionId");
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
    quizzes: state.getQuizesReducer.quizzes
  };
};

const mapDispatchToProps = {
  getQuizzes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizzesContainer);
