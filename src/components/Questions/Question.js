import React, { Component } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";





class Question extends Component {

  render() {
    const { onNextButtonClick, Index, question, onGoBackButtonClick, length } = this.props
    return (
      <div className="Question">


        <QuestionCard
          length={length}
          Index={Index}
          question={question.question}
          progress={"Question: " + Index + " of " + length}
          onNextButtonClick={onNextButtonClick}
          answers={question.answers}
          onGoBackButtonClick={onGoBackButtonClick}
        />


      </div>
    );
  }
}

export default Question;
