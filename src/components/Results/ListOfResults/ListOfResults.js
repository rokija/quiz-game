import React, { Component } from 'react';
import './ListOfResults.css';
import ResultItem from "../ResultItem/ResultItem";
import questionImg from "../../../assets/question3.jpg";

export class ListOfResults extends Component {
    render() {
        const { userResults } = this.props
        return (
            <div className="ListOfResults">
                <h1 className="ListOfResults__title">My results</h1>
                {userResults.map(function (quiz) {
                    return (
                        <ResultItem
                            key={quiz.id}
                            name={quiz.name}
                            description={quiz.description}
                            image={questionImg}
                        />
                    )
                })}
            </div>
        );
    }
}

export default ListOfResults;
