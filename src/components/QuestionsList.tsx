import React from 'react';
import Question from './Question.tsx';
import QuestionProps from './Types/QuestionProps.tsx';

type QuestionsListProps = {
    questions: Array<QuestionProps>
};

const QuestionsList = ({ questions } : QuestionsListProps) => {

    console.log(questions);

    return (
        <div>
            {questions.map((question) => (
                <Question
                    question={question.question}
                    options={question.options}
                    id={question.id}
                />
            ))}
        </div>
    )
}

export default QuestionsList;