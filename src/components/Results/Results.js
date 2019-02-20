import React, { Component } from 'react';
import './Results.css';
import ListOfResults from './ListOfResults/ListOfResults';
import ListOfMyQuizResults from './ListOfMyQuizResults/ListOfMyQuizResults';

export class Results extends Component {
    render() {
        return (
            <div className="Results" >
                <div className="Results__body">
                    <div className="Results__group" >
                        <ListOfResults />
                    </div>
                    <div className="Results__group" >
                        <ListOfMyQuizResults />
                    </div>
                </div>
            </div >
        );
    }
}

export default Results;
