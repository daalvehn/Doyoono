import React, { useEffect } from 'react'
import './Answer.css'
import useSound from 'use-sound'
import swoosh from '../../assets/audio/swoosh.mp3'
import correct from '../../assets/audio/correct.mp3'

const Answer = ({
    answer,
    correctAnswer,
    isAnswersReveal,
    setIsAnswersReveal,
    setScore,
    score,
    NextQuestion,
}) => {
    let revealClass = ''
    useEffect(() => {
        revealClass = 'answer-wrong'
    }, [isAnswersReveal])

    const [playSwoosh] = useSound(swoosh, { volume: 0.05 })
    const [playCorrect] = useSound(correct, { volume: 0.2 })

    const checkAnswer = (e) => {
        e.preventDefault()
        playCorrect()
        setIsAnswersReveal(true)
        setScore(answer === correctAnswer ? score + 100 : score)
        setTimeout(NextQuestion, 2500)
    }

    return (
        <div
            className={` ${
                isAnswersReveal &&
                (answer === correctAnswer ? 'answer-correct' : 'answer-wrong')
            } answer-container`}
            onClick={checkAnswer}
            onMouseEnter={playSwoosh}
        >
            <p dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
    )
}

export default Answer
