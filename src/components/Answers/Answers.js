import React from "react";
import AnswersCard from '../AnswersCard';

export const answers = ({ answers }) => (
    <div className="Answers">
        {answers.map((answers, index) => (
            <AnswersCard
                key={index}
                // add values in such a way that is displayed 
                // under
                title={answers.title}
                questions={answers}

            />
        ))}
    </div>
);

