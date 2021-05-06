import React, { useEffect } from 'react'
import FinalMessage from './FinalMessage'
import FinalScore from './FinalScore'
import RetryButton from './RetryButton'
import ScoreHistory from './ScoreHistory'
import './ScoreContainer.css'
import yeah from '../../assets/audio/yeah.mp3'
import logo from '../../assets/images/logo.svg'
import confetti from 'canvas-confetti'
import { useHistory } from 'react-router-dom'
import { useScreenshot } from 'use-screenshot-hook'
import ScreenshotButton from './ScreenshotButton'

const ScoreContainer = ({
    userName,
    score,
    setScore,
    setAmount,
    setCategory,
    setDifficulty,
    category,
    difficulty,
    quizThemes,
}) => {
    const { image, takeScreenshot } = useScreenshot()

    //Animation confettis
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

        setTimeout(() => {
            clearInterval(interval)
        }, 5000)

        return () => clearInterval(interval)
    })

    //Go back home depuis logo
    const history = useHistory()

    const GoBackHome = () => {
        setScore(0)
        setAmount(10)
        setCategory(9)
        setDifficulty('easy')
        history.push('/')
    }

    //Animation sonore
    const handleAudio = () => {
        const yeahPlay = new Audio(yeah)
        yeahPlay.volume = 0.05
        yeahPlay.play()
    }

    useEffect(() => {
        handleAudio()
    }, [])

    return (
        <div className="score-page">
            <div className="logo">
                <img alt="logo" src={logo} onClick={GoBackHome} />
            </div>
            <FinalMessage userName={userName} />
            <FinalScore score={score} />
            <div className="quizMode">
                <p>
                    in{' '}
                    <strong>
                        {
                            quizThemes.filter((x) => x.themeId === category)[0]
                                .theme
                        }
                    </strong>
                </p>
                <p>
                    difficulty <strong>{difficulty}</strong>
                </p>
            </div>
            <div></div>
            <RetryButton
                setScore={setScore}
                setAmount={setAmount}
                setCategory={setCategory}
                setDifficulty={setDifficulty}
            />
            <div className="btm-score">
                <div className="screen-button">
                    <ScreenshotButton
                        image={image}
                        takeScreenshot={takeScreenshot}
                    />
                </div>

                <div className="scr-history">
                    <ScoreHistory userName={userName} score={score} />
                </div>
            </div>
        </div>
    )
}

export default ScoreContainer
