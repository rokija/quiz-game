import React, { Component } from 'react';
import MyQuizResultItem from "../myQuizResultItem/myQuizResultItem";
import './ListOfMyQuizResults.css';

const ListOfMyQuizzes = [
    {
        name: 'Quiz 1',
        description: 'some description of quiz',
        averageScore: 90,
        usersCount: 3
    },
    {
        name: 'Quiz 2',
        description: 'some description of quiz',
        averageScore: 75,
        usersCount: 5
    },
    {
        name: 'Quiz 3',
        description: 'some description of quiz',
        averageScore: 95,
        usersCount: 12
    },

]

export class ListOfMyQuizResults extends Component {
    render() {
        return (
            <div className="ListofmyQuizResults">
                <h1 className="ListofmyQuizResults_title">My quizzes results</h1>
                {ListOfMyQuizzes.map(function (quiz) {
                    return (
                        < MyQuizResultItem
                            key={quiz.id}
                            name={quiz.name}
                            description={quiz.description}
                            averageScore={quiz.averageScore}
                            usersCount={quiz.usersCount}
                        />
                    )
                })}
            </div>
        );
    }
}

export default ListOfMyQuizResults;
