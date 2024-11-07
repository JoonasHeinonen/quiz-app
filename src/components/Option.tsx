import React from 'react';
import scoreStore from '../store/scoreStore';

type OptionProps = {
    description: string,
    isCorrect: any
};

const Option = ({description, isCorrect} : OptionProps) => {

    const increaseScore = scoreStore((state) => state.increaseScore);

    const handleChange = (event : any) => {
        // condition ? exprIfTrue : exprIfFalse
        event.target.value === 'true' 
            ? handleAnswer(true)
            : handleAnswer(false);
    }

    const handleAnswer = ( value : boolean ) => {
        if (value) {
            alert('This is true');
            increaseScore();
        }
        else {
            alert ('No, this is false');
        }
    }

    return (
        <div>
            <input 
                type='radio'
                id={description}
                name={description}
                value={isCorrect}
                onChange={handleChange}
            />
            <label htmlFor={description}>{description}</label>
        </div>
    );
};

export default Option;