import React, { Component } from "react";
import { connect } from "react-redux";
import { getQuestions } from "../redux/actions/questionActions";
import QuestionsList from "../components/Questions/Question";
import { Spinner } from "reactstrap";

export class QuestionsListContainer extends Component {
  componentDidMount() {
    this.props.getQuestions();
  }

  render() {
    const { questions } = this.props;
    if (!questions) {
      return (
        <div>
          <Spinner color="warning" />
          loading
        </div>
      );
    }

    return <QuestionsList questions={questions} />;
  }
}
const mapStateToProps = state => {
  return {
    questions: state.getQuestionsReducer.questions
  };
};

const mapDispatchToProps = {
  getQuestions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsListContainer);
