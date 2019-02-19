import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, Button, FormGroup, Label, Input } from 'reactstrap';
import "./QuestionCard.css";

class QuestionCard extends Component {
    render() {
        const { question, answers, onAnswerSubmit } = this.props;

        return (
            <div className="QuestionCard mb-5">
                <Card>
                    <CardBody>
                        <CardTitle className="QuestionCard__card-title">{question}</CardTitle>
                        {answers.map((el, index) => (
                            <FormGroup key={index} check>
                                <Label check>
                                    <input type="checkbox" />{' '}
                                    {el}
                                </Label>
                            </FormGroup>
                        ))}

                        <CardText></CardText>
                        <Button>Go Back</Button>
                        <Button
                            onClick={onAnswerSubmit}>
                            Submit
                        </Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default QuestionCard;