import React, { Component } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import AnswerCard from "../AnswerCard/AnswerCard";




class Question extends Component {
  render() {
    return(
      <div className="Question">
      {/*{this.props.questions &&
            this.props.questions.map((question, index) => (*/}
        
        <QuestionCard 
        key={"index"} 
        question={"Question"/*question.question*/}
        progress={"Question: 1 of 10"}
         >
            <AnswerCard
              key={"index"}
              answers={
                [
                  "1.answer ",
                  "2.answer ", 
                  "3.answer ",
                  "4.answer "
                ] /*question.answer */}
            />
        </QuestionCard>
          
        
      </div>
    );  
  } 
}

export default Question;
