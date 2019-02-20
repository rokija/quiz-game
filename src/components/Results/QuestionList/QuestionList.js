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
        question: "Which tools we did discussed?",
        type: "checkbox",
        answers: ["react", "github", "angular", "no one"],
        correct: ["react", "github"],
        userAnswers: ["github"]
    }
]

class QuestionList extends Component {
    constructor() {
        super();
        this.state = { name: "Test Your knowledge" };
    }
    render() {
        return (
            < div className="QuestionList" >
                <div className="QuestionList__body">
                    <div className="QuestionItem__name">
                        <h1>{this.state.name}</h1>
                    </div>
                    <div className="QuestionList__item" >
                        {Questions.map((questionItem, number) => {
                            return (<QuestionItem
                                key={questionItem.id}
                                question={questionItem.question}
                                type={questionItem.type}
                                answers={questionItem.answers}
                                correctAnswers={questionItem.correct}
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
