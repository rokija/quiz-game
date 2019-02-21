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
    this.props.getQuestionByIDd();
  }

  render() {
    const { questions,
     /* match: { params: { questionId } }*/ } = this.props;


    if (!questions) {
      return <div>loading...</div>
    }

    //if (!questionId) {
    //const { quiz } = this.props;
    //const id = questions[0].id;
    //
    //    return <Redirect to={`/quizzes/${quiz.quizId}/questions/${id}`} />
    //}



    return (<Question
      length={questions.length}
      question={questions[this.state.currentIndex]}
      Index={this.state.currentIndex + 1}
      onNextButtonClick={this.onNextButtonClick}
      onGoBackButtonClick={this.onGoBackButtonClick} />
    )
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
  getQuestions,
  storeAnswers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionContainer);