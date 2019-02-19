import React, { Component } from 'react';
import './ResultItem.css';

class ResultItem extends Component {
    render() {
        const { name, description, score } = this.props;

        return (
            <div>
                <div className="ResultItem">
                    <h2 className="ResultItem__h2">{name}</h2>
                    <p className="ResultItem__desc">{description}</p>
                    <p className="ResultItem__score">Score: {score}</p>
                </div>
            </div>
        )
    }
}

export default ResultItem;