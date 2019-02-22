import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './myQuizResultItem.css';

class MyQuizResultItem extends Component {
    render() {
        const { quizId, name, description, image } = this.props;
        return (
            <div className="myQuizResultItem">
                <div className="row">
                    <div className="col-sm-3">
                        <img className="ResultItem__img" src={image} alt="question" />
                    </div>
                    <div className="col-sm-9">
                        <h2 className="myQuizResultItem__h2"><Link to={`/results/statistics/quizzes/${quizId}`}>{name}</Link></h2>
                        <p className="myQuizResultItem__desc">{description}</p>
                    </div>
                    {/* <p className="myQuizResultItem__score">Average score: {averageScore}</p>
                    <p className="myQuizResultItem__users">Number of users: {usersCount}</p> */}
                </div>
            </div >
        )
    }
}

export default MyQuizResultItem;
