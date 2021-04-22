import React from 'react'
import './Answer.css'

const Answer = ({ answer, nextquestion }) => {
    return (
        <div className="answer-container" onClick={nextquestion}>
            <p>{answer}</p>
        </div>
    )
}

export default Answer
