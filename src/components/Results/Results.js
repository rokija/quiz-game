import React, { Component } from 'react';
import './Results.css';
import ListOfResults from './ListOfResults/ListOfResults';
import ListOfMyQuizResults from './ListOfMyQuizResults/ListOfMyQuizResults';

export class Results extends Component {

    render() {
        const { userResults, userQuizzes } = this.props
        return (
            <div className="Results" >
                <div className="Results__group" >
                    <ListOfResults userResults={userResults} />
                </div>
                <div className="Results__group" >
                    <ListOfMyQuizResults userQuizzes={userQuizzes} />
                </div>
            </div>
        );
    }
}

export default Results;
