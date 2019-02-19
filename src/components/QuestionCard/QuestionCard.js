import React, { Component } from "react";
import { Card, CardBody, CardTitle, Button, CardText} from 'reactstrap';

import "./QuestionCard.css";

class QuestionCard extends Component {
    render() {
        const {progress, question, onAnswerSubmit } = this.props;

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
                        onClick={onAnswerSubmit}>
                        Next
                        </Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default QuestionCard;