import React, { useEffect, useState } from 'react'
import './Answer.css'
import useSound from 'use-sound'
import swoosh from '../../assets/audio/swoosh.mp3'
import correct from '../../assets/audio/correct.mp3'
import wrong from '../../assets/audio/wrong.mp3'
import confetti from 'canvas-confetti'

const Answer = ({
    answer,
    correctAnswer,
    isAnswersReveal,
    setIsAnswersReveal,
    setScore,
    score,
    NextQuestion,
    setPopScore,
    setPopValue,
    timerRemains,
    timerDuration,
    difficulty,
}) => {
    const [playSwoosh, { stopSwoosh }] = useSound(swoosh, { volume: 0.1 })
    const playWrong = new Audio(wrong)
    const playCorrect = new Audio(correct)
    playWrong.volume = 0.4
    playCorrect.volume = 0.6
    const [playerAnswerClass, setPlayerAnswerClass] = useState('')

    let scoreMultiplier = 1
    switch (difficulty) {
        default:
            scoreMultiplier = 1
            break
        case 'medium':
            scoreMultiplier = 1.5
            break
        case 'hard':
            scoreMultiplier = 2.5
            break
    }
    const scoreFormula =
        // (100 + 100 %tempsRestant) * scoreMultiplier
        (100 + Math.ceil((timerRemains / timerDuration) * 100)) *
        scoreMultiplier

    useEffect(() => {
        return () => {
            setPlayerAnswerClass('')
            setPopScore(false)
        }
    }, [answer])

    useEffect(() => {
        if (timerRemains === 0) {
            setIsAnswersReveal(true)
            setTimeout(NextQuestion, 2500)
        }
    }, [timerRemains])

    //Animation good answer

    const AnimGoodAnswer = () => {
        confetti({
            particleCount: 50,
            startVelocity: 30,
            spread: 360,
            scalar: 1,
            colors: ['var(--blue)'],
        })
    }

    //Fonction globale réponse

    const checkAnswer = (e) => {
        e.preventDefault()
        setIsAnswersReveal(true)

        if (answer === correctAnswer) {
            setPlayerAnswerClass('player-correct')
            setPopValue(scoreFormula)
            setScore(score + scoreFormula)
            setPopScore(true)
            playCorrect.play()
            AnimGoodAnswer()
        } else {
            setPlayerAnswerClass('player-wrong')
            playWrong.play()
        }
        setTimeout(NextQuestion, 2500)
    }

    useEffect(() => {
        return () => {
            setPlayerAnswerClass('')
            setPopScore(false)
            clearTimeout(checkAnswer)
        }
    }, [answer])

    return (
        <div
            className={` answer-container ${
                isAnswersReveal &&
                (answer === correctAnswer ? 'answer-correct' : 'answer-wrong')
            } ${playerAnswerClass} `}
            onClick={!isAnswersReveal ? checkAnswer : undefined}
            onMouseEnter={!isAnswersReveal ? playSwoosh : undefined}
            onMouseLeave={stopSwoosh}
        >
            <p dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
    )
}

export default Answer
