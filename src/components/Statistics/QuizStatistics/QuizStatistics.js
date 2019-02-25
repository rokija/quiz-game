import React, { Component } from 'react';
import QuestionStatistics from '../QuestionStatistics/QuestionStatistics';
import "./QuizStatistics.css";

const data = [
    {
        question: "1.question",
        type: "radio",
        answers: [23, 1, 5],
        correct: [0],
        total: 17
    },
    {
        question: "2.question",
        type: "checkbox",
        answers: [1, 22, 4, 2],
        correct: [1],
        total: 17
    },
    {
        question: "3.question",
        type: "checkbox",
        answers: [2, 6, 10, 10, 1],
        correct: [2, 3],
        total: 29
    },
    {
        question: "4.question",
        type: "text",
        answers: [],
        correct: [],
        total: 29
    },
]

const colors = [
    "#66ff99", // correct answer color
    "#ff66ff",
    "#cc66ff",
    "#ff9980",
    "#ffff66",
    "#ff9980",
    "#ffff80",
    "#cc0066",
    "#ff9900",
    "gold"]

const answersTitles = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J"
]

class QuizStatistics extends Component {
    validateCorrectAnswer(answerIndex, correct) {
        for (let i = 0; i < correct.length; i++) {
            if (answerIndex === correct[i]) return true
        }
        return false
    }

    CreateDataPoints(dataItem) {
        const dataPoints = [["Element", "Count", { role: "style" }]]
        for (let i = 0; i < dataItem.answers.length; i++) {
            let correctAnswer = this.validateCorrectAnswer(i, dataItem.correct)

            if (correctAnswer) {
                dataPoints.push([answersTitles[i], dataItem.answers[i], colors[0]]);
            }
            else {
                dataPoints.push([answersTitles[i], dataItem.answers[i], colors[i + 1]]);
            }
        }
        return dataPoints

    }

    render() {
        return (
            <div className="QuizStatistics">
                {data.map((dataItem, index) => {
                    if (dataItem.type === "text") return null
                    const dataPoints = this.CreateDataPoints(dataItem)
                    return (
                        <QuestionStatistics
                            key={index}
                            dataPoints={dataPoints}
                            question={dataItem.question}
                        />)
                })
                }
            </div>
        )
    }
}

export default QuizStatistics;
