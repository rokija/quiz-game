import React, { Component } from "react";
import { Card, CardBody, FormGroup, Label, Input } from 'reactstrap';

import "./AnswerCard.css";

class AnswerCard extends Component {
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
        const { answers } = this.props;
        console.log('answers', this.state.selectedCount)
        return (
            <div className="AnswerCard">
                <Card>
                    <CardBody>
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
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default AnswerCard;