import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class AddQuestion extends Component {
  state = {
    type: null,
    answers: [],
    question: "",
    correct: [],
    correctAnswers: []
  };

  handleChange = event => {
    this.setState({ type: event.target.value });
  };

  renderTextInput = value => {
    return <Input type="input" onChange={e => this.onAnswerChange(e, value)} />;
  };

  renderCheckboxInput = () => {
    return (
      <Label>
        <Input type="checkbox" />
        CheckBox
      </Label>
    );
  };

  renderRadioInput = () => {
    return <Input type="radio" />;
  };

  renderTextareaInput = () => {
    return <Input type="textarea" />;
  };

  renderInput = () => {
    const { value } = this.state;

    switch (value) {
      case "input":
        return this.renderTextInput();
      case "checkbox":
        return this.renderCheckboxInput();
      case "radio":
        return this.renderRadioInput();
      case "textbox":
        return this.renderTextareaInput();
      case "":
      default:
        return null;
    }
  };

  onAddAnswer = e => {
    e.preventDefault();

    let answers = [...this.state.answers];
    answers.push("");

    this.setState({ answers });
  };

  onRemoveAnswer = (index = 0, e) => {
    e.preventDefault();

    let answers = [...this.state.answers];
    answers.splice(index, 1);

    this.setState({ answers: answers });
  };

  onAddQuestion = e => {
    const { postQuestion } = this.props;
    const { question, answers, type } = this.state;

    let correct = [];
    this.state.correct.forEach((x, i) => {
      if (x) correct.push(x);
    });

    postQuestion({
      question,
      answers,
      correct,
      type
    }).then(() =>
      this.setState({
        type: null,
        answers: [],
        question: "",
        correct: [],
        correctAnswers: []
      })
    );
  };

  onQuestionInput = e => this.setState({ question: e.target.value });

  onAnswerChange = (e, i) => {
    let answers = [...this.state.answers];
    answers[i] = e.target.value;

    this.setState({ answers });
  };

  onMarkAsCorrect = (i, value) => {
    let correct = [...this.state.correct];
    correct[i] = !correct[i];
    this.setState({ correct });

    if (correct[i]) {
      this.setState({ correctAnswers: [...this.state.correctAnswers, value] });
    } else {
      this.setState({
        correctAnswers: this.state.correctAnswers.filter(el => el !== value)
      });
    }
  };

  submitQuiz = () => this.props.history.push("/quizzes");

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="addQuestion">Add Question: </Label>
          <Input
            onChange={this.onQuestionInput}
            type="question"
            name="question"
            id="addQuestion"
            placeholder="Text"
          />
        </FormGroup>
        <FormGroup tag="fieldset">
          <p>Answer Type:</p>
          {this.state.value}
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="type"
                value="input"
                onChange={this.handleChange}
              />
              Input
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="type"
                value="checkbox"
                onChange={this.handleChange}
              />
              CheckBox
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="type"
                value="radio"
                onChange={this.handleChange}
              />
              Radio
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="type"
                value="textbox"
                onChange={this.handleChange}
              />
              TextBox
            </Label>
          </FormGroup>
        </FormGroup>
        {this.renderInput()}
        <Button color="secondary" onClick={this.onAddAnswer}>
          Add Answer
        </Button>
        {this.state.answers.map((x, i) => (
          <div key={i}>
            {i + 1}. {this.renderTextInput(i)}
            <Button onClick={e => this.onRemoveAnswer(i, e)} close />
            <Button onClick={() => this.onMarkAsCorrect(i, x)}>
              {this.state.correct[i] ? "true" : "false"}
            </Button>
          </div>
        ))}
        <div className="mt-5">
          <Button color="primary" onClick={this.onAddQuestion}>
            Add Question
          </Button>
          <Button onClick={this.submitQuiz}>Submit Quiz</Button>
        </div>
      </Form>
    );
  }
}
