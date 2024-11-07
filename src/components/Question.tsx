import React from 'react';
import Option from './Option.tsx';

type QuestionProps = {
    question: String,
    totalOptions: any,
    questionKey: any
};

const Question = ({ question, totalOptions, questionKey } : QuestionProps) => {
    return (
        <div className='question' key={questionKey}>
            <p>{question}</p>
            {totalOptions.map((option : any) => (
                <Option description={option.label} isCorrect={option.isCorrect} key={option.id} />
            ))}
        </div>
    )
}

export default Question;