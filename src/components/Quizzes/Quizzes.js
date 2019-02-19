import React, { Component } from "react";
import Quiz from "./Quiz";
import "./Quizzes.css";

class Quizzes extends Component {
    render() {
        return (
            <div className="Quizzes">
                <div className="Quizzes__content">
                    <Quiz title="First Quiz" description="Description about quiz" isAdmin={false}/>
                    <Quiz title="Second Quiz" description="Description about quiz" isAdmin={true}/> 
                    <Quiz title="Third Quiz" description="Description about quiz" isAdmin={false}/>
                    <Quiz title="Fourth Quiz" description="Description about quiz" isAdmin={true}/> 
                    <Quiz title="Fifth Quiz" description="Description about quiz" isAdmin={false}/>
                </div>
            </div>   
         )}
}

export default Quizzes