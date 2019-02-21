import React, { Component } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";





class Question extends Component {

  render() {

    const { question } = this.props
    console.log(question)
    const { onNextButtonClick } = this.props
    return (
      <div className="Question">


        <QuestionCard
          key={1}
          question={question.question}
          progress={"Question: " + 1 + " of " + 3}
          onNextButtonClick={onNextButtonClick}
          answers={question.answers}
        />


      </div>
    );
  }
}

export default Question;
