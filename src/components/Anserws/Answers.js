import React from "react";
import AnserwsCard from '../AnserwsCard';

export const Answers = ({ answers }) => (
    <div className="Answers">
        {posts.map((answers, index) => (
            <AnserwsCard
                key={index}
                // add values in such a way that is displayed 
                // under
                title={answers.title}
                questions={answers}

            />
        ))}
    </div>
);

