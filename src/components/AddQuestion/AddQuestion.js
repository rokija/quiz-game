import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class Example extends React.Component {
  state = {
    "type":null, 
    "answers": [],
    "question": "",
    "correct":[],
    correctAnswers: []

  };
  handleChange = (event) => {

    console.log(event.target.name, event.target.value)
    this.setState({type: event.target.value}); 
  }

renderTextInput = (i) => {
  return <Input type="input" onChange={(e) => this.onAnswerChange(e,i)}  name="newinput" />
}
renderCheckboxInput = () => {
  return <Label><Input type="checkbox" name="newinput" />CheckBox</Label>
}
renderRadioInput = () => {
  return <Input type="radio" name="newinput" />
}
renderTextareaInput = () => {
  return <Input type="textarea" name="newinput" />
}

renderInput = () => {
    switch (this.state.value) {
    case "input": 
      return this.renderTextInput()
    case "checkbox": 
      return this.renderCheckboxInput()
    case "radio":
      return this.renderRadioInput()
    case "textbox":
      return this.renderTextareaInput()
    case '': 
    default:
    return null 
  }
}

onAddAnswer = (e) => {
  e.preventDefault()
  let answers = [...this.state.answers]
  answers.push("")
  this.setState({"answers": answers}); 
}

onRemoveAnswer = (index=0,e) => {
  e.preventDefault()
  let answers = [...this.state.answers]
  answers.splice(index,1)
  this.setState({"answers":answers})

}

onAddQuestion = (e) => {
  let correct = []
  this.state.correct.forEach((x,i) => {
    if (x) correct.push(x)
  })
  console.log({
    question: this.state.question,
    answers: this.state.answers,
    correct: correct,
    type: this.state.type,   
  });
}

onQuestionInput = (e) => {
  console.log({
    question: this.state.question,
    type: this.state.type,
  });
  this.setState({question: e.target.value}); 
}


onAnswerChange = (e, i) => {
let answers = [...this.state.answers]
answers[i] = e.target.value
 this.setState({answers}); 
}

onMarkAsCorrect = (i, x) => {
  console.log("MARK", x, this.state.correct[i])
  let correct = [...this.state.correct]
  correct[i] = !correct[i]
  this.setState({correct}); 

  if(correct[i]) {
    this.setState({ correctAnswers: [...this.state.correctAnswers, x] })
  } else {
    this.setState({ correctAnswers: this.state.correctAnswers.filter(el => el !== x) })
  }
}

  render() {
    return (

        <Form>
        <FormGroup>
          <Label for="addQuestion">Add Question: </Label>
          <Input onChange={ this.onQuestionInput }
          type="question" name="question" id="addQuestion" placeholder="Text" />
        </FormGroup>
        
        <FormGroup tag="fieldset">
          <p>Answer Type:</p>{this.state.value}
          <FormGroup check>
            <Label check>
              <Input type="radio" name="type" value="input" onChange={this.handleChange} />{' '}
             Input
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="type" value="checkbox" onChange={this.handleChange} />{' '}
             CheckBox
            </Label>
          </FormGroup>
             <FormGroup check>
            <Label check>
              <Input type="radio" name="type" value="radio" onChange={this.handleChange} />{' '}
             Radio
            </Label>
          </FormGroup>
             <FormGroup check>
            <Label check>
              <Input type="radio" name="type" value="textbox" onChange={this.handleChange} />{' '}
             TextBox
            </Label>
          </FormGroup>
        </FormGroup>
        {this.renderInput()}
       <Button color="primary" onClick={this.onAddQuestion}>Add Question</Button>{' '}
      <Button color="secondary" onClick={this.onAddAnswer}>Add Answer</Button>{' '}
      {
        this.state.answers.map((x, i) => 
          <div key={i}> 
            {i+1}. {this.renderTextInput(i)} 
            <Button onClick={(e)=>this.onRemoveAnswer(i, e)} close />
             <Button onClick={()=>this.onMarkAsCorrect(i, x)}>
             {this.state.correct[i] ? 'true' : 'false'}
             </Button>
          </div>
        )
      }

      </Form>
    );
  }
}





















