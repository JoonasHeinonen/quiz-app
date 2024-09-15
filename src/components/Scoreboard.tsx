import React from 'react';

type ScoreboardProps = {
    score: number,
    maxScore: number
};

const Scoreboard = ({ score, maxScore } : ScoreboardProps) => {

    return (
        <div>
            <p>Score: { score } / { maxScore }</p>
        </div>
    )
}

export default Scoreboard;