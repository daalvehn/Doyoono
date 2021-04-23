import React, { useEffect } from 'react'
import './Answer.css'

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

    const checkAnswer = (e) => {
        e.preventDefault()
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
        >
            <p dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
    )
}

export default Answer
