import React, { useEffect } from 'react'
import FinalMessage from './FinalMessage'
import FinalScore from './FinalScore'
import RetryButton from './RetryButton'
import './ScoreContainer.css'
import yeah from '../../assets/audio/yeah.mp3'

const ScoreContainer = ({
    userName,
    score,
    setScore,
    setAmount,
    setCategory,
    setDifficulty,
}) => {
    const handleAudio = () => {
        const yeahPlay = new Audio(yeah)
        yeahPlay.volume = 0.02
        yeahPlay.play()
    }

    useEffect(() => {
        handleAudio()
    }, [])

    return (
        <div className="score-page">
            <FinalMessage userName={userName} />
            <FinalScore score={score} />
            <RetryButton
                setScore={setScore}
                setAmount={setAmount}
                setCategory={setCategory}
                setDifficulty={setDifficulty}
            />
        </div>
    )
}

export default ScoreContainer
