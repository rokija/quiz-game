import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ResultItem.css';

class ResultItem extends Component {
    OpenQuizResults() {
        return <Redirect to="/results/statistics/quizzes" />
    }
    render() {
        const { quizId, name, description, image } = this.props;

        return (
            <div className="ResultItem container-fluid">
                <div className="row">
                    <div className="col-sm-3">
                        <img className="ResultItem__img" src={image} alt="question" />
                    </div>
                    <div className="col-sm-9">
                        <h2 className="ResultItem__title"><Link to={`/results/my/quizzes/${quizId}`}>{name}</Link></h2>
                        <p className="ResultItem__desc">{description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultItem;
