import React, { Component } from "react";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./QuizContainer.css";


// QuizConatiner Contains CardBox, cardtitle where the
// quizes title is, subtitle where the question is,
// showquestions and showanswers where all the answers are dispalyed
class QuizContainer extends Component {
    render() {
        //When values are created add them to props and insert
        // as objects into reactstarp components
        const { add values } = this.props;
        return (


            <div>
                <Card className="QuizContainerBox">
                    <CardTitle className="ShowQuizTitle">
                        <CardSubtitle className="ShowQuestions">
                            <CardText className="ShowAnswers">

                            </CardText>
                        </CardSubtitle>
                    </CardTitle>
                </Card>
            </div>
        );


    }
}

export default QuizContainer;