import React, { Component } from "react";
import { connect } from "react-redux";
import Quizzes from "../components/Quizzes/Quizzes";
import { getQuizzes } from "../redux/actions/quizActions";

export class QuizContainer extends Component {
  componentDidMount() {
    console.log("Quiz");
    this.props.getQuizzes();
  }

  render() {
    const { quizzes } = this.props;
    return <Quizzes quizzes={quizzes} />;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.getQuizesReducer.quizzes
  };
};

const mapDispatchToProps = {
  getQuizzes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizContainer);
