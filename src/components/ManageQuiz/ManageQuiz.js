import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./ManageQuiz.css";

class ManageQuiz extends Component {
    render() {
        const { onTitleInputChange, onDescriptionInputChange, goHome, submitForm, labelValue, btnValue } = this.props;
        return (
            <div className="AddQuizz">
                <h1 className="AddQuizz__title">{labelValue}</h1>
                <Form className="AddQuizz__Form">
                    <FormGroup className="AddQuizz__Form_Group1">
                        <Label for="AddTitle">Title</Label>
                        <Input
                            type="text"
                            name="text"
                            id="AddTitle"
                            placeholder="Quizz title here..."
                            onChange={onTitleInputChange}
                        />
                    </FormGroup>
                    <FormGroup className="AddQuizz__Form_Group2">
                        <Label for="AddDescription">Description</Label>
                        <Input
                            type="textarea"
                            name="text"
                            id="AddDescription"
                            placeholder="Quizz description here..."
                            onChange={onDescriptionInputChange}
                        />
                        <Button className="AddQuizz__btn" onClick={submitForm} color="success">{btnValue}</Button>
                        <Button className="AddQuizz__btn" onClick={goHome} outline color="primary">CANCEL</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default ManageQuiz;
