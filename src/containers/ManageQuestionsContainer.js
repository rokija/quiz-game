import React, { Component } from 'react'
import AddQuestion from '../components/AddQuestion/AddQuestion.js'
import { connect } from "react-redux";
import { postQuestion } from "../redux/actions/questionActions";

export class ManageQuestionsContainer extends Component {
  render() {
    return (
      <div>
        <AddQuestion quizId={this.props.match.params.quizId} postQuestion={this.props.postQuestion} />
      </div>
    )
  }
}


const mapDispatchToProps = {
  postQuestion
};

export default connect(
  null,
  mapDispatchToProps
)(ManageQuestionsContainer);


