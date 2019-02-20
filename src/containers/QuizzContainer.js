import React, { Component } from "react";
import AddQuizz from "../components/AddQuizz/AddQuizz";

class QuizzContainer extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
        };
    }
    onTitleInputChange = (e) => this.setState({ title: e.target.value });

    oSnDescriptionInputChange = (e) => this.setState({ description: e.target.value });

    submitForm = () => {
        //This will be used with Redux, when integrated.
        // const { title, description } = this.state;
        // this.props.submitQuizz(title, description);
        this.props.history.push("/quizzes");
    };

    goHome = () => this.props.history.push("/quizzes");

    render() {
        return <AddQuizz
            onTitleInputChange={this.onTitleInputChange}
            onDescriptionInputChange={this.onDescriptionInputChange}
            submitForm={this.submitForm}
            goHome={this.goHome}
        />
    }
}

export default QuizzContainer;