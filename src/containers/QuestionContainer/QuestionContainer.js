import React, { Component } from "react";
import { connect } from "react-redux";
import { getQuestions, nextQuestion } from "../../redux/actions/questionActions";
import Question from "../../components/Questions/Question";
import { Spinner } from "reactstrap";
import { Redirect } from "react-router-dom";
import AnswerCard from "../../components/AnswerCard/AnswerCard"

class QuestionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCount: 0,
    };
  }

  nextQuestion = () => {
    const { selectedCount } = this.state;
    const { quiz, question } = this.props;

    if (selectedCount) {
      this.props.history.push(`/quizzes/${quiz.quizId}/questions/${question.questionId}`)
    }
  }

  componentDidMount() {
    this.props.getQuestions();
  }

  render() {
    const { question, match: { params: { questionId } } } = this.props;

    // while waiting for questions show spinner
    if (!question) {
      return <div>loading...</div>
    }

    // if it is the first question 
    if (!questionId) {
      const { quiz } = this.props;
      const id = question[0].id;

      return <Redirect to={`/quizzes/${quiz.quizId}/questions/${id}`} />
    }

    return <Question />
  }
}

const mapStateToProps = state => {
  return {
    questions: state.getQuestionsReducer.questions,
  };
};

const mapDispatchToProps = {
  getQuestions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionContainer);