import React, { useEffect } from 'react'
import './Answer.css'
import useSound from 'use-sound'
import swoosh from '../../assets/audio/swoosh.mp3'

const Answer = ({ answer, checkAnswer, correctAnswer, isAnswersReveal }) => {
    let revealClass = ''
    useEffect(() => {
        revealClass = 'answer-wrong'
    }, [isAnswersReveal])

    const [playSwoosh] = useSound(swoosh, { volume: 0.1 })

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
