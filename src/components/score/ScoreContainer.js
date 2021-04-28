import React from 'react'
import FinalMessage from './FinalMessage'
import FinalScore from './FinalScore'
import RetryButton from './RetryButton'
import './ScoreContainer.css'
import logo from '../../assets/images/logo.svg'
import { useHistory } from 'react-router-dom'

const ScoreContainer = ({
    userName,
    score,
    setScore,
    setAmount,
    setCategory,
    setDifficulty,
}) => {
    //Go back home depuis logo
    const history = useHistory()

    const GoBackHome = () => {
        setScore(0)
        setAmount(10)
        setCategory(9)
        setDifficulty('easy')
        history.push('/')
    }

    return (
        <div className="score-page">
            <div className="logo">
                <img alt="logo" src={logo} onClick={GoBackHome} />
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
