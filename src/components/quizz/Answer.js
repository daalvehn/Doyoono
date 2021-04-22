import React from 'react'
import './Answer.css'

const Answer = ({ answer, nextquestion }) => {
    return (
        <div className="answer-container" onClick={nextquestion}>
            <p dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
    )
}

export default Answer
