import React, { Component } from 'react';
import MyQuizResultItem from "../myQuizResultItem/myQuizResultItem";
import './ListofmyQuizResults.css';

// const ListofmyQuizzes = ['my First quiz', 'my Second quiz', 'my Third quiz'];
const ListofmyQuizzes = [
    {
        name: 'Quiz 1',
        description: 'some description of quiz',
        averageScore: 90,
        usersNumber: 3
    },
    {
        name: 'Quiz 2',
        description: 'some description of quiz',
        averageScore: 75,
        usersNumber: 5
    },
    {
        name: 'Quiz 3',
        description: 'some description of quiz',
        averageScore: 95,
        usersNumber: 12
    },

]

export class ListofmyQuizResults extends Component {
    render() {
        return (
            <div className="ListofmyQuizResults">
                <h1 className="ListofmyQuizResults_h1">My quizzes results</h1>
                {ListofmyQuizzes.map(function (quiz) {
                    return (
                        < MyQuizResultItem
                            key={quiz.id}
                            name={quiz.name}
                            description={quiz.description}
                            averageScore={quiz.averageScore}
                            usersNumber={quiz.usersNumber}
                        />
                    )
                })}
            </div>
        );
    }
}

export default ListofmyQuizResults;
