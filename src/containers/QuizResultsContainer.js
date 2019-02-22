import React, { Component } from 'react'
import { getRecords, getResults, getQuizzes, getResultsQuestions } from '../redux/actions/resultsActions';
// import { getQuestions } from '../redux/actions/questionActions';
import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import QuestionList from "../components/Results/QuestionList/QuestionList";

const Questions = [
  {
    question: "What is your name?",
    type: "text",
    answers: [],
    correct: ["John"],
    userAnswers: ["John"]
  },
  {
    question: "What is group leader's name?",
    type: "radio",
    answers: ["Liza", "Kitija", "John", "Janis"],
    correct: ["Janis"],
    userAnswers: ["Liza"]
  },
  {
    question: "Which tools we did discussed?",
    type: "checkbox",
    answers: ["react", "github", "angular", "no one"],
    correct: ["react", "github"],
    userAnswers: ["github"]
  }
]

export class QuizResultsContainer extends Component {
  componentDidMount() {
    this.props.getQuizzes();
    this.props.getResults();
    this.props.getRecords();
    this.props.getResultsQuestions();
  }
  render() {
    const { results, quizzes, questions, records } = this.props;
    // const { quizId } = this.params
    let { quizId } = this.props.match.params
    //let quizId = 1 //for test
    console.log('QuizResultsContainer 1 res', results)
    console.log('QuizResultsContainer 1 que', questions)
    console.log('QuizResultsContainer 1 rec', records)
    console.log('QuizResultsContainer 1 qui', quizzes)
    if (!results || !questions || !records || !quizzes) {
      return (
        <div>
          <Spinner />
          <div>loading...</div>
        </div>
      )
    }
    console.log('QuizResultsContainer 2')
    let quizQuestions = []
    let questionIds = []
    for (let i = 0; i < quizzes.length; i++) {
      if (quizzes[i].quizId === quizId) questionIds = quizzes[i].questionId
      console.log('---quiz questionIds', questionIds)
    }

    for (let i = 0; i < questionIds.length; i++) {
      for (let j = 0; j < questions.length; j++) {
        if (questionIds[i] === questions[j].questionId) {
          for (let k = 0; k < records.length; k++) {
            if (questionIds[i] === records[k].questionId) {
              quizQuestions.push(...questions[j], records[k].answers);
            }
          }
        }
      }
    }
    quizQuestions = Questions // for test
    console.log(quizQuestions)
    if (!quizQuestions) {
      return (
        <div>
          <div>There is no results</div>
        </div>
      )
    }
    return (<div>
      <QuestionList questionList={quizQuestions} />
      {/* <QuestionList /> */}
    </div>)
  }
}

const mapDispatchToProps = {
  getResults,
  getQuizzes,
  getResultsQuestions,
  getRecords
}

const mapStateToProps = state => {
  return {
    questions: state.getResultsReducer.questions,
    records: state.getResultsReducer.records,
    results: state.getResultsReducer.results,
    quizzes: state.getResultsReducer.quizzes
  }
}
// export default QuizResultsContainer
export default connect(mapStateToProps, mapDispatchToProps)(QuizResultsContainer);
