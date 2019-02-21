import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class Example extends React.Component {
  state = {
    "value":null, 
    "answers": []
  };
  handleChange = (event) => {
    console.log(event.target.name, event.target.value)
    this.setState({value: event.target.value}); 
  }

renderTextInput = () => {
  return <Input type="input" name="newinput" />
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

onAddAnswer = () => {
  let answers = [...this.state.answers]
  answers.push(answers.length)
  this.setState({"answers": answers}); 
}

onRemoveAnswer = () => {
  let answers = [...this.state.answers]
  answers.slice()
  this.setState({"answers":answers})
}

  render() {
    return (

        <Form>
        <FormGroup>
          <Label for="addQuestion">Add Question: </Label>
          <Input type="question" name="question" id="addQuestion" placeholder="Text" />
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
       <Button color="primary">Add Question</Button>{' '}
      <Button color="secondary" onClick={this.onAddAnswer}>Add Answer</Button>{' '}
      <Button color="danger" onClick={this.onRemoveAnswer}>Remove Question</Button>{' '}
      {this.state.answers.map(x => 
      <div key={x}> {x+1}. {this.renderTextInput()} </div>)}
      </Form>
    );
  }
}





















