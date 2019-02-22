import React, { Component } from "react";
import { connect } from "react-redux";
import { getQuestions, storeAnswers } from "../../redux/actions/questionActions";
import Question from "../../components/Questions/Question";
//import { Spinner } from "reactstrap";


class QuestionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
  }

  onGoBackButtonClick = () => {
    this.props.history.push("/quizzes");
  }

  onNextButtonClick = selectedAnswers => {
    const { currentIndex } = this.state;
    const { questions, storeAnswers } = this.props;

    if (selectedAnswers.length) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1
      }));
      storeAnswers(selectedAnswers);

      if (questions.length > currentIndex + 1) {
        const { id } = this.props.questions[currentIndex + 1];
        this.props.history.push(`/quizzes/:quizId/questions/${id}`);
      } else {
        this.props.history.push("/results");
      }
    }


  }

  componentDidMount() {
    this.props.getQuestions();
  }

  render() {
    const { questions,
     /* match: { params: { questionId } }*/ } = this.props;


    if (!questions) {
      return <div>loading...</div>
    }

    return (<Question
      length={questions.length}
      question={questions[this.state.currentIndex]}
      Index={this.state.currentIndex + 1}
      onNextButtonClick={this.onNextButtonClick}
      onGoBackButtonClick={this.onGoBackButtonClick} />
    )
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questionsReducer.questions,
  };
};

const mapDispatchToProps = {
  getQuestions,
  storeAnswers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionContainer);
