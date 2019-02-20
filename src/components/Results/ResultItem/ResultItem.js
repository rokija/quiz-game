import React, { Component } from 'react';
import './ResultItem.css';

class ResultItem extends Component {
    render() {
        const { name, description, score, image } = this.props;

        return (
            <div className="ResultItem container-fluid">
                <div className="row">
                    <div className="col-sm-2">
                        <img className="ResultItem__img" src={image} alt="question" />
                    </div>
                    <div className="col-sm-10">
                        <h2 className="ResultItem__title">{name}</h2>
                        <p className="ResultItem__desc">{description}</p>
                        <p className="ResultItem__score">Score: {score}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultItem;
