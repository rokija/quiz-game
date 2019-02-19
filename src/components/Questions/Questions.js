import React from "react";
import QuestionCard from '../QuestionCard';

/* A constant value of questions is assigned
where a value of question is passed by indexing it */
export const questions = ({ questions }) => (
    <div className="Answers">
        {questions.map((question, index) => (
            <QuestionCard
                key={index}
                title={questions.title}

            />
        ))}
    </div>
);
