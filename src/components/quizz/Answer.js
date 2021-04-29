import React, { useEffect, useState } from 'react'
import './Answer.css'
import useSound from 'use-sound'
import swoosh from '../../assets/audio/swoosh.mp3'
import correct from '../../assets/audio/correct.mp3'
import wrong from '../../assets/audio/wrong.mp3'

const Answer = ({
    answer,
    correctAnswer,
    isAnswersReveal,
    setIsAnswersReveal,
    setScore,
    score,
    NextQuestion,
}) => {
    const [playSwoosh, { stopSwoosh }] = useSound(swoosh, { volume: 0.05 })
    const playWrong = new Audio(wrong)
    const playCorrect = new Audio(correct)
    playWrong.volume = 0.15
    playCorrect.volume = 0.2
    const [playerAnswerClass, setPlayerAnswerClass] = useState('')

    useEffect(() => {
        return () => {
            setPlayerAnswerClass('')
        }
    }, [answer])

    const checkAnswer = (e) => {
        e.preventDefault()
        setIsAnswersReveal(true)

        if (answer === correctAnswer) {
            setPlayerAnswerClass('player-correct')
            setScore(score + 100)
            playCorrect.play()
        } else {
            setPlayerAnswerClass('player-wrong')
            playWrong.play()
        }

        setTimeout(NextQuestion, 2500)
    }

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
