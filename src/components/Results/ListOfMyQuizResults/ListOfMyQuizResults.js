import React, { Component } from 'react';
import MyQuizResultItem from "../myQuizResultItem/myQuizResultItem";
import questionImg from "../../../assets/question3.jpg";
import './ListOfMyQuizResults.css';

export class ListOfMyQuizResults extends Component {
    render() {
        const { userQuizzes } = this.props
        return (
            <div className="ListofmyQuizResults">
                <h1 className="ListofmyQuizResults_title">My quizzes results</h1>
                {userQuizzes.map(function (quiz) { // change on userQuizzes
                    return (
                        <MyQuizResultItem
                            key={quiz.id}
                            name={quiz.name}
                            description={quiz.description}
                            image={questionImg}
                            quizId={quiz.id}
                        />
                    )
                })}
            </div>
        );
    }
}

export default ListOfMyQuizResults;
