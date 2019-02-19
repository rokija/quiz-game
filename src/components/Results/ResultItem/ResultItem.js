import React, { Component } from 'react';
import './ResultItem.css';
import questionImg from "../../../assets/question3.jpg";

class ResultItem extends Component {
    render() {
        const { name, description, score } = this.props;

        return (
            <div className="ResultItem container-fluid">
                <div className="row">
                    <div className="col-sm-4">
                        <img className="ResultItem__img" src={questionImg} alt="question" />
                    </div>
                    <div className="col-sm-8">
                        <h2 className="ResultItem__h2">{name}</h2>
                        <p className="ResultItem__desc">{description}</p>
                        <p className="ResultItem__score">Score: {score}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultItem;