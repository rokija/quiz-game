
import React, { Component } from "react";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "../../containers/AnswerContainer";


// QuizConatiner Contains CardBox, cardtitle where the
// quizes title is, subtitle where the question is,
// showquestions and showanswers where all the answers are dispalyed
class AnswerCard extends Component {
    render() {
        //When values are created add them to props and insert
        // as objects into reactstarp components
        const { answer } = this.props;
        return (

            // AnswerBox gives a box for quizzes
            // ShowQuestion has the module questions, the module has the quiz id and questions are cycled through indexes +1
            // Answers are displayed automatically by question id or index

            <div>
                <Card className="AnswerBox">
                    <CardText className="ShowAnswers">
                        <p>{answer}</p>
                    </CardText>
                </Card>
            </div>
        );


    }
}
export default AnswerCard;