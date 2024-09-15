import React from 'react';
import Question from './Question.tsx';

type QuestionsListProps = {
    questions: Array<Object>
};

const QuestionsList = ({ questions } : QuestionsListProps) => {
    return (
        <div>
            {questions.map((question) => (
                <Question
                    question={question.question}
                    totalOptions={question.options}
                    key={question.id}
                />
            ))}
        </div>
    )
}

export default QuestionsList;