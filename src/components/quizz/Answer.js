import React from 'react'
import './Answer.css'

const Answer = ({ answer }) => {
    return (
        <div className="answer-container">
            <p>{answer}</p>
        </div>
    )
}

export default Answer
