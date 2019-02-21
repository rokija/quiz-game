import React, { Component } from "react";
import Quizzes from "../components/Quizzes/Quizzes";
import { getQuiz } from "../redux/actions/quizActions";
import { connect } from "react-redux";

export class QuizContainer extends Component {
  componentDidMount() {
    this.props.getQuiz();
  }
  render() {
    if(!this.props.quizzes) {
      return <div>loading...</div>
    }
    return <Quizzes quizzes={this.props.quizzes}/>
  }
}

const mapStateToProps = state => {
  return {
      quizzes: state.getQuizzesReducer.quizzes
  };
}
const mapDispatchToProps = {
  getQuiz
};


export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer); 
