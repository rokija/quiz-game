import React, { Component } from "react";
import './QuestionItem.css';

class QuestionItem extends Component {
    render() {
        const { question, type, answers, correctAnswers, userAnswers, number } = this.props;
        return (
            <div className="QuestionItem container-fluid">
                <div className="row">
                    <div className="col-sm-10">
                        <h3 className="QuestionItem__title">{number}.{question}</h3>
                        <form>
                            <formgroup className="QuestionItem__answers">
                                {type !== "text" && <div><label className="QuestionItem__label">Answers:</label></div>}
                                {answers.map(answer => {
                                    let isChecked = false
                                    let index = null
                                    if (type === "checkbox" || type === "radio") {
                                        isChecked = true
                                    }
                                    userAnswers.map(userAnswer => {
                                        correctAnswers.map(correctAnswer => {
                                            if (answer === userAnswer && userAnswer === correctAnswer && isChecked === true) {
                                                index = 3
                                            } else if (answer === userAnswer && userAnswer === correctAnswer && type !== "text") {
                                                index = 2
                                            } else if (answer === userAnswer && userAnswer !== correctAnswer) {
                                                index = 1
                                            } else if ({ type }) { index = 0 }

                                        })
                                    })
                                    switch (index) {
                                        case 0: return <div><input type={type} disabled /><label>{answer}</label></div>
                                        case 1: return <div><input type={type} checked disabled /><label className="QuestionItem__incorrect">{answer}</label></div>
                                        case 2: return <div><input type={type} disabled /><label className="QuestionItem__correct">{answer}</label></div>
                                        case 3: return <div><input type={type} checked disabled /><label className="QuestionItem__correct">{answer}</label></div>
                                        default: return <div></div>
                                    }
                                })}
                            </formgroup>
                            <formgroup>
                                <label className="QuestionItem__label">Correct answer:</label>
                                {correctAnswers.map(correctAnswer => <div><label>{correctAnswer}</label></div>)}
                            </formgroup>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionItem;