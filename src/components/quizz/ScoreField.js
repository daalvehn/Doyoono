import React from 'react'
import './ScoreField.css'

const ScoreField = ({score}) => {
    return (
        <div className="score-field">
            
             <p>SCORE </p> 
            <p className="score-quizz">{score}</p>
        </div>
    )
}

export default ScoreField