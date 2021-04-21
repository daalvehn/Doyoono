import React from 'react'
import './Answer.css'

const Answer = ({ answer }) => {
    return (
        <div className="answer-container">
            <p dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
    )
}

export default Answer
