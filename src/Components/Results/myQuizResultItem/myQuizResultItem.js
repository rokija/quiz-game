import React, { Component } from 'react';
import './myQuizResultItem.css';

class MyQuizResultItem extends Component {
    render() {
        const { name, description, averageScore, usersNumber } = this.props;

        return (
            <div>
                <div className="myQuizResultItem">
                    <h2 className="myQuizResultItem__h2">{name}</h2>
                    <p className="myQuizResultItem__desc">{description}</p>
                    <p className="myQuizResultItem__score">Average score: {averageScore}</p>
                    <p className="myQuizResultItem__users">Number of users: {usersNumber}</p>
                </div>
            </div>
        )
    }
}

export default MyQuizResultItem;