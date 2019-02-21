import React, { Component } from "react";
import { Card, CardBody, CardTitle, Button, CardText } from 'reactstrap';

import "./QuestionCard.css";
import { nextQuestion } from "../../redux/actions/questionActions";

class QuestionCard extends Component {
    render() {
        const { progress, question } = this.props;

        return (
            <div className="QuestionCard mb-5">
                <Card>
                    <CardBody>
                        <CardTitle className="QuestionCard__card-title">
                            {question}
                        </CardTitle>
                        <CardText>{progress}</CardText>
                        {this.props.children}
                        <Button>Go Back</Button>
                        <Button className="Submit_button"
                            onClick={() => nextQuestion()}>
                            Next
                        </Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default QuestionCard;