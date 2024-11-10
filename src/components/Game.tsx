import React from 'react';
import QuestionsList from './QuestionsList.tsx';
import Scoreboard from './Scoreboard.tsx';
import scoreStore from '../store/scoreStore.js';
import QuestionProps from './Types/QuestionProps.tsx';

type GameProps = {
    questions: Array<QuestionProps>
};

const Game = ({ questions } : GameProps) => {

    const score = scoreStore((state) => state.score);
    const maxScore = scoreStore((state) => state.maxScore);
    const setMaxScore = scoreStore((state) => state.setMaxScore);

    setMaxScore(questions.length);

    return (
        <div>
            <h1>Quiz app</h1>
            <QuestionsList questions={questions} />
            <Scoreboard score={score} maxScore={maxScore} />
        </div>
    )
}

export default Game;