import React from 'react'
import FinalMessage from './FinalMessage'
import FinalScore from './FinalScore'
import RetryButton from './RetryButton'
import './ScoreContainer.css'

const ScoreContainer = ({username }) => {
    return (
        <div className="score-page">
                <FinalMessage userName={username} />
                <FinalScore />
                 <RetryButton />
                 </div>
    )
}

export default ScoreContainer
