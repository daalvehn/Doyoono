import React from 'react'
import FinalMessage from './FinalMessage'
import FinalScore from './FinalScore'
import RetryButton from './RetryButton'

const ScoreContainer = ({ userName }) => {
    return (
        <div>
            <FinalMessage userName={userName} />
            <FinalScore />
            <RetryButton />
        </div>
    )
}

export default ScoreContainer
