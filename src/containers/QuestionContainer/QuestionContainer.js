import React, { Component } from "react";
import { connect } from "react-redux";
import { getQuestions, nextQuestion } from "../../redux/actions/questionActions";
import Question from "../../components/Questions/Question";
//import { Spinner } from "reactstrap";
import { Redirect } from "react-router-dom";

class QuestionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCount: 0,
    };
  }

  onNextButtonClick = (selectedAnswers) => {
    const { selectedCount } = this.state;
    const { id } = this.props.questions;

    if (selectedCount) {
      this.props.history.push(`/quizzes/:quizId/questions/${id}`)
      return <Redirect to={`/quizzes/:quizId/questions/${id}`} />
    }
    console.log(id)

  }

  componentDidMount() {
    this.props.getQuestions();
    console.log(this.props)
  }

  render() {
    const { questions, match: { params: { questionId } } } = this.props;

    console.log(questionId);

    if (!questions) {
      return <div>loading...</div>
    }

    if (!questionId) {
      const { quiz } = this.props;
      const id = questions[0].id;

      return <Redirect to={`/quizzes/${quiz.quizId}/questions/${id}`} />
    }


    for (var index = 0; index < questions.length; index++) {

      if (index === questions.length - 1) {
        return console.log('>>>>>>>>') //<Redirect to="/results" />
      }

      if (questionId === questions[index].questionId) {
        return console.log(questionId) //<Question onNextButtonClick={this.onNextButtonClick} />
      }
      return <Question question={this.props.questions[index]} onNextButtonClick={this.onNextButtonClick} />
    }
    // while waiting for questions show spinner
    //if (!question) {
    //  return <div>loading...</div>
    //}

    // if it is the first question 
    /*if (!questionId) {
      const { quiz } = this.props;
      const id = questions[0].id;

      return console.log('>>>>>>>>') //<Redirect to={`/quizzes/${quiz.quizId}/questions/${id}`} />
    }*/

    /*return questions.find((question, index) => {
      if (index === question.length - 1) {
        return console.log('>>>>>>>>') //<Redirect to="/results" />
      }

      if (questionId === question.id) {
        return console.log(questions) //<Question onNextButtonClick={this.onNextButtonClick} />
      }

      return <Question question={this.props.questions[0]} />
    })*/


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