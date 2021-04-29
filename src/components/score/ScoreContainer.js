import React, { useEffect } from 'react'
import FinalMessage from './FinalMessage'
import FinalScore from './FinalScore'
import RetryButton from './RetryButton'
import './ScoreContainer.css'
import logo from '../../assets/images/logo.svg'
import confetti from 'canvas-confetti'

const ScoreContainer = ({
    userName,
    score,
    setScore,
    setAmount,
    setCategory,
    setDifficulty,
}) => {
    const AnimScore = () => {
        confetti({
            particleCount: 100,
            startVelocity: 30,
            spread: 180,
            scalar: 1.2,
        })
    }
    useEffect(() => {
        AnimScore()
        const interval = setInterval(() => {
            AnimScore()
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="score-page">
            <div className="logo">
                <img alt="logo" src={logo} />
            </div>
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
