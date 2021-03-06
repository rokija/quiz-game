import React, { Component } from "react";
import ManageQuiz from "../components/ManageQuiz/ManageQuiz";
import { connect } from "react-redux";
import { submitQuizz } from "../redux/actions/quizActions";

class ManageQuizzContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: ""
    };
  }

  onInputChange = e => this.setState({ [e.target.name]: [e.target.value] });

  submitForm = e => {
    e.preventDefault();
    const { title, description } = this.state;
    const { submitQuizz, history } = this.props;

    submitQuizz(title, description).then(res => {
      const quizId = res.payload._id;
      history.push(`/quizzes/${quizId}/edit/questions/create`);
    });
  };

  goHome = () => this.props.history.push("/");

  render() {
    const {
      match: {
        params: { quizId }
      }
    } = this.props;

    if (!quizId) {
      return (
        <ManageQuiz
          labelValue={"Create Quiz"}
          btnValue={"Add"}
          submitForm={this.submitForm}
          onInputChange={this.onInputChange}
          goHome={this.goHome}
        />
      );
    } else {
      return (
        <ManageQuiz
          labelValue={"Edit Quiz"}
          btnValue={"Edit"}
          submitForm={this.submitForm}
          onInputChange={this.onInputChange}
          goHome={this.goHome}
        />
      );
    }
  }
}

const mapDispatchToProps = {
  submitQuizz
};

export default connect(
  null,
  mapDispatchToProps
)(ManageQuizzContainer);
