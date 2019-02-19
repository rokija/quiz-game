import React, { Component } from "react";
import './QuestionList.css';
import QuestionItem from "../QuestionItem/QuestionItem";

const Questions = [
    {
        question: "What is your name?",
        type: "text",
        answers: [],
        correct: ["John"],
        userAnswers: ["John"]
    },
    {
        question: "What is group leader's name?",
        type: "radio",
        answers: ["Liza", "Kitija", "John", "Janis"],
        correct: ["Janis"],
        userAnswers: ["Liza"]
    },
    {
        question: "Which tools we did discused?",
        type: "checkbox",
        answers: ["react", "github", "angular", "no one"],
        correct: ["react", "github"],
        userAnswers: ["github"]
    }
]

class QuestionList extends Component {
    render() {
        return (
            <div className="QuestionList" >
                <div className="QuestionList__body">
                    <div className="QuestionList__item" >
                        {Questions.map((questionItem, number) => {
                            return (<QuestionItem
                                key={questionItem.id}
                                question={questionItem.question}
                                type={questionItem.type}
                                answers={questionItem.answers}
                                correct={questionItem.correct}
                                userAnswers={questionItem.userAnswers}
                                number={++number}
                            />)
                        })}
                    </div>
                </div>
            </div >
        )
    }
}

export default QuestionList;
