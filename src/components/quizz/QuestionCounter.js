import React from 'react'
import './QuestionCounter.css'

const QuestionCounter = ({ questionCounter, amount }) => {
    return (
        <div className="question-counter">
            <p>
                {questionCounter < 10 && 0}
                {questionCounter}/{amount}
            </p>
        </div>
    )
}

export default QuestionCounter
