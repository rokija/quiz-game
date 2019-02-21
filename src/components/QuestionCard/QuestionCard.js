import React, { Component } from "react";
import { Card, CardBody, CardTitle, Button, CardText, FormGroup, Label, Input } from 'reactstrap';

import "./QuestionCard.css";

class QuestionCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedCount: 0,
            selectedAnswers: []
        };
    }

    onAnswerSelect = (e, el) => {
        console.log(e.target.checked);
        if (e.target.checked) {
            this.setState({
                selectedCount: this.state.selectedCount + 1,
                selectedAnswers: [...this.state.selectedAnswers, el]
            })
        } else {
            const arr = this.state.selectedAnswers.filter(a => a !== el)

            this.setState({
                selectedCount: this.state.selectedCount - 1,
                selectedAnswers: arr
            })
        }
    }

    render() {
        const { progress, question, answers, onNextButtonClick, onGoBackButtonClick, Index, length } = this.props;
        const { selectedAnswers } = this.state;
        return (
            <div className="QuestionCard mb-5">
                <Card>
                    <CardBody>
                        <CardTitle className="QuestionCard__card-title">
                            {question}
                        </CardTitle>
                        <CardText>{progress}</CardText>
                        <div className="QuestionCard_answers">
                            {answers.map((el, index) => (
                                <FormGroup key={index} check>
                                    <Label check>
                                        <Input
                                            onChange={(e) => this.onAnswerSelect(e, el)}
                                            name={el}
                                            type="checkbox" />{' '}
                                        {el}
                                    </Label>
                                </FormGroup>
                            ))}
                        </div>
                        {Index === 1 && (
                            <Button
                                onClick={() => onGoBackButtonClick()}>
                                Go Back</Button>
                        )}

                        <Button className="Submit_button"
                            onClick={() => onNextButtonClick(selectedAnswers)}>
                            {Index === length ? "Submit" : "Next"}
                        </Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default QuestionCard;