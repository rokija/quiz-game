import React, { Component } from 'react';
import './Results.css';
import ListofResults from './ListofResults/ListofResults';
import ListofmyQuizResults from './ListofmyQuizResults/ListofmyQuizResults';

export class Results extends Component {
    render() {
        return (

            <div className="Results" >
                <div className="Results__body">
                    <div className="Results__group" >
                        <ListofResults />
                    </div>

                    <div className="Results__group" >
                        <ListofmyQuizResults />
                    </div>
                </div>
            </div >
        );
    }
}

export default Results;