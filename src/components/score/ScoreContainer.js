import React from 'react'
import FinalMessage from './FinalMessage'
import FinalScore from './FinalScore'
import RetryButton from './RetryButton'
import './ScoreContainer.css'

const ScoreContainer = ({ userName, score, setScore }) => {
    return (
        <div className="score-page">
            <FinalMessage userName={userName} />
            <FinalScore score={score} />
            <RetryButton setScore={setScore} />
        </div>
    )
}

export default ScoreContainer
