
import React, { Component } from "react";
import Answers from "../AnswerCard/AnswerCard";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


// QuizConatiner Contains CardBox, cardtitle where the
// quizes title is, subtitle where the question is,
// showquestions and showanswers where all the answers are dispalyed
class QuestionCard extends Component {
    render() {
        //When values are created add them to props and insert
        // as objects into reactstarp components
        const { quiztitle, question } = this.props;
        return (

            // AnswerBox gives a box for quizzes
            // ShowQuestion has the module questions, the module has the quiz id and questions are cycled through indexes +1
            // Answers are displayed automatically by question id or index

            <div>
                <Card className="AnswerBox">
                    <CardTitle className="ShowQuestion" >
                        <h2>{quiztitle}</h2>
                        <CardText className="ShowAnswers">
                            <div>
                                {question}
                            </div>
                            <div>
                                <Answers />
                            </div>
                        </CardText>
                    </CardTitle>
                </Card>
            </div>
        );


    }
}
export default QuestionCard;