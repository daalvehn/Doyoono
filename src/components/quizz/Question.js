import React from 'react'
import './Question.css'

const Question = ({ question }) => {
    return (
        <div className="question-container">
            <p>{question}</p>
        </div>
    )
}

export default Question
