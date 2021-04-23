import React from 'react'
import './Question.css'

const Question = ({ question }) => {
    return (
        <div className="question-container">
            <p dangerouslySetInnerHTML={{ __html: question }} />
        </div>
    )
}

export default Question
