import React, { Component } from 'react';
import './ListofResults.css';
import ResultItem from "../ResultItem/ResultItem";

const ListofQuizzes = [
    {
        name: 'Quiz 1',
        description: 'some description of quiz',
        score: 90
    },
    {
        name: 'Quiz 2',
        description: 'some description of quiz',
        score: 75
    },
    {
        name: 'Quiz 3',
        description: 'some description of quiz',
        score: 95
    },

]

export class ListofResults extends Component {
    render() {
        return (

            <div className="ListOfResults">

                <h1 className="ListofResults__h1">My results</h1>

                {ListofQuizzes.map(function (quiz) {
                    return (
                        < ResultItem
                            key={quiz.id}
                            name={quiz.name}
                            description={quiz.description}
                            score={quiz.score}
                        />
                    )
                    // {onclick = "GotoListofQuestions(quizId)"}
                })}
            </div>
        );
    }
}

export default ListofResults;