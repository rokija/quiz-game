import React, { Component } from "react";
import Quizzes from "../components/Quizzes/Quizzes";
import { getQuiz } from "../redux/actions/quizActions";
import { connect } from "react-redux";

export class QuizContainer extends Component {
  componentDidMount() {
    this.props.getQuiz();
  }
  render() {
    return <Quizzes quizzes={this.props.quizzes}/>
  }
}


const mapDispatchToProps = {
  getQuiz
};


export default connect(null, mapDispatchToProps)(QuizContainer); 
