import React, { Component } from "react";
import { Card, CardBody, FormGroup, Label, Input } from 'reactstrap';
import "./AnswerCard.css";

class AnswerCard extends Component {
    render() {
        const { answers } = this.props;
        console.log('answers',answers)
        return (
            <div className="AnswerCard">
                <Card>
                    <CardBody>
                        {answers.map((el, index) => (
                            <FormGroup key={index} check>
                                <Label check>
                                <Input type="checkbox" />{' '}
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