import React, { useEffect } from 'react'
import './Answer.css'

const Answer = ({ answer, checkAnswer, correctAnswer, isAnswersReveal }) => {
    let revealClass = ''
    useEffect(() => {
        revealClass = 'answer-wrong'
    }, [isAnswersReveal])

    return (
        <div
            className={` ${
                isAnswersReveal &&
                (answer === correctAnswer ? 'answer-correct' : 'answer-wrong')
            } answer-container`}
            onClick={checkAnswer}
        >
            <p dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
    )
}

export default Answer
