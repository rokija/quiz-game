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
    titleInputChange = (e) => this.setState({ title: e.target.value });

    descriptionInputChange = (e) => this.setState({ description: e.target.value });

    submitForm = () => {
        //This will be used with Redux, when integrated.
        // const { title, description } = this.state;
        // this.props.submitQuizz(title, description);
        this.props.history.push("/quizzes");
    };

    goHome = () => this.props.history.push("/quizzes");

    render() {
        const { title, description } = this.state;
        return <AddQuizz
            title={title}
            description={description}
            titleInputChange={this.titleInputChange}
            descriptionInputChange={this.descriptionInputChange}
            submitForm={this.submitForm}
            goHome={this.goHome}
        />
    }
}

export default QuizzContainer;