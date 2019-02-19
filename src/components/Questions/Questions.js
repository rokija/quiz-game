import React from "react";
import QuestionCard from '../QuestionCard';

export const questions = ({ questions }) => (
    <div className="Answers">
        {questions.map((questions, index) => (
            <QuestionCard
                key={index}
                // add values in such a way that is displayed 
                // under
                title={questions.title}
                questions={questions}

            />
        ))}
    </div>
);
