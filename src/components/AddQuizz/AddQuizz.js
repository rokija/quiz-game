import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./AddQuizz.css";

class AddQuizz extends Component {
    render() {
        const { titleInputChange, descriptionInputChange, goHome, submitForm } = this.props;
        return (
            <div className="AddQuizz">
                <h1 className="AddQuizz__title">Add quizz</h1>
                <Form className="AddQuizz__Form">
                    <FormGroup className="AddQuizz__Form_Group1">
                        <Label for="AddTitle">Title</Label>
                        <Input
                            type="text"
                            name="text"
                            id="AddTitle"
                            placeholder="Quizz title here..."
                            onChange={titleInputChange}
                        />
                    </FormGroup>
                    <FormGroup className="AddQuizz__Form_Group2">
                        <Label for="AddDescription">Description</Label>
                        <Input
                            type="textarea"
                            name="text"
                            id="AddDescription"
                            placeholder="Quizz description here..."
                            onChange={descriptionInputChange}
                        />
                        <Button className="AddQuizz__btn" onClick={goHome} outline color="primary">Cancel</Button>
                        <Button className="AddQuizz__btn" onClick={submitForm} color="success">Add</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default AddQuizz;
