import React, { Component } from 'react';
// import Pagination from 'pagination-component';
import './ListofResults.css';
import ResultItem from "../ResultItem/ResultItem";
import questionImg from "../../../assets/question3.jpg";

const ListofQuizzes = [
    {
        name: 'Quiz 1',
        description: 'some description of quiz',
        score: 90,
        image: questionImg
    },
    {
        name: 'Quiz 2',
        description: 'some description of quiz',
        score: 75,
        image: questionImg
    },
    {
        name: 'Quiz 3',
        description: 'some description of quiz',
        score: 95,
        image: questionImg
    },
]

export class ListofResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        };
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }

    render() {
        return (
            <div className="ListOfResults">
                <h1 className="ListofResults__h1">My results</h1>
                {ListofQuizzes.map(function (quiz) {
                    return (
                        <ResultItem
                            key={quiz.id}
                            name={quiz.name}
                            description={quiz.description}
                            score={quiz.score}
                            image={quiz.image}
                        />
                    )
                    // {onclick = "GotoListofQuestions(quizId)"}
                })}
            </div>
        );
    }
}

export default ListofResults;
