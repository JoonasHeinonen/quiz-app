import React from 'react';
import Option from './Option.tsx';
import QuestionProps from './Types/QuestionProps.tsx';

const Question = ({ question, options, id } : QuestionProps) => {
    return (
        <div className='question' key={id}>
            <p>{question}</p>
            {options.map((option : any) => (
                <Option description={option.label} isCorrect={option.isCorrect} key={option.id} />
            ))}
        </div>
    )
}

export default Question;