import React from 'react'
import FinalMessage from './FinalMessage'
import FinalScore from './FinalScore'
import RetryButton from './RetryButton'

const ScoreContainer = () => {
    return (
        <div>
            <FinalMessage />
            <FinalScore />
            <RetryButton />
        </div>
    )
}

export default ScoreContainer
