import React, { Component } from "react";
import { connect } from "react-redux";
import { Spinner } from "reactstrap";
import Answers from "../../components/Answers/Answers";
// Will need to import answers and method getAnswers from database

class AnswerContainer extends Component {
    componentDidMount() {
        this.props.getAnswers();
    }
    render() {
        const { answers } = this.props;

        if (!answers) {
            return <div>
                <Spinner color="primary" />
            </div>
        }
        return <Answers answers={answers} />
    }
}


// Returns the state of answers to props so they can be accessed from elsewhere
const mapStateToProps = state => {
    return {
        answers: state
    };
}
export default AnswerContainer;