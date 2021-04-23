import React from 'react'
import './QuestionCounter.css'

const QuestionCounter = ({ questionCounter }) => {
    return (
        <div className="question-counter">
            <p>
                {questionCounter < 10 && 0}
                {questionCounter}/10
            </p>
        </div>
    )
}

export default QuestionCounter
