import React, { Component } from "react";
import ManageQuiz from "../components/ManageQuiz/ManageQuiz";

class ManageQuizzContainer extends Component {
    constructor(){
        super();
        this.state={
            title:'',
            description:'',
        };
    }

    onTitleInputChange = (e) => this.setState({ title: e.target.value });
    onDescriptionInputChange = (e) => this.setState({ description: e.target.value });
    submitForm = () => {
        //This will be used with Redux, when integrated.
        // const { title, description } = this.state;
        // this.props.submitQuizz(title, description);
        this.props.history.push("/quizzes");
    };
    goHome = () => this.props.history.push("/quizzes");


    render() {
        const  { match: { params: { quizId } } } = this.props;
        console.log(this.props.location, this.props.match.params);
            if(!quizId){
                return(
                <ManageQuiz
                    labelValue={'Create Quiz'}
                    btnValue={'Add'}
            />
            )
        }else{
            return(
                <ManageQuiz
                    labelValue={'Edit Quiz'}
                    btnValue={'Edit'}
            />
            )
        }
    }
}


export default  ManageQuizzContainer;