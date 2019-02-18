import React, { Component } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import "./Question.css";



class Question extends Component {
  render() {
    return(
      <div className="Question">
        
          <QuestionCard
            key={"index"}
            question={"Question"}
            answers={
              [
                "1.answer ",
                "2.answer ", 
                "3.answer "
              ]}
          />
        
      </div>
    );  
  } 
}

export default Question;
