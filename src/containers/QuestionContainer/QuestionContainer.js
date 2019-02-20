import React, { Component } from "react";
import { connect } from "react-redux";
import { getQuestions, nextQuestion } from "../../redux/actions/questionActions";
import Question from "../../components/Questions/Question";
import {Spinner} from "reactstrap";
import {Redirect} from "react-router-dom";


class QuestionContainer extends Component {

    onAnswerSubmit = () =>{
        console.log("nextQuestion")
    }
    
    
    componentDidMount() {

        this.props.getQuestions();
    }
    render(){
    const {question} = this.props
    
    return question.forEach((question, index) => {
        if (index===0){
            return <Question question={question.question}/>
        }
        else if(index===question.length()){
            return <Question question={question.question}/>
        }
        else{
            return <Question question={question.question}/>
        }
      });
        

    }  

  
}

const mapStateToProps = state => {
    return {
      questions: state.getQuestionsReducer.questions
    };
  };

const mapDispatchToProps = {
  getQuestions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionContainer);