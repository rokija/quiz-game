import React from "react";
import AnswersCard from '../AnswersCard';

/* A constant value of answers is assigned. 
To the assigned value we pass a single answer
that is indexed */
export const answers = ({ answers }) => (
    <div className="Answers">
        {answers.map((answer, index) => (
            <AnswersCard
                key={index}
                answer={answers.answer}
            />
        ))}
    </div>
);

