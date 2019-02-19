import React, { Component } from "react";
import { connect } from "react-redux";
import { Spinner } from "reactstrap";
import Questions from "../../components/Questions/Questions";
// Will need to import answers and method getAnswers from database

class AnswerContainer extends Component {
    // if component mounts add method
    /* componentDidMount() {
        this.props.getAnswer() when they are done;
    } */
    render() {
        const { values like questions } = this.props;

        if (!questions) {
            return <div>
                <Spinner color="primary" />
            </div>
        }
        return <Answers />
    }
}

// add statetopros with getanswer reducer

// insert dispatchtoprops

// export container with 
// connect and statetopros and dispatch

export default QuestionContainer;