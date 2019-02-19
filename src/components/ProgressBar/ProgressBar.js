import React from "react";
import { Progress } from "reactstrap";
import "./ProgressBar.css";

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  return (
    <div className="ProgressBar">
      <Progress value={currentQuestion} max={totalQuestions} />
      <p className="ProgressBar__text">
        {currentQuestion} of {totalQuestions}
      </p>
    </div>
  );
};

export default ProgressBar;
