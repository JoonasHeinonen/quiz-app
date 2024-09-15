import React from 'react';
import Option from './Option.tsx';

type QuestionProps = {
    question: String,
    totalOptions: any,
    key: any
};

const Question = ({ question, totalOptions, key } : QuestionProps) => {
    return (
        <div className='question' key={key}>
            <p>{question}</p>
            {totalOptions.map((option) => (
                <Option description={option.label} isCorrect={option.isCorrect} key={option.id} />
            ))}
        </div>
    )
}

export default Question;