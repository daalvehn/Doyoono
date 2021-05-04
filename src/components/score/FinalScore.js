import React from 'react';
import "./FinalScore.css"

const FinalScore = ({score}) => {
    return (
           
           <div className="final-score">
            <p className="score">Here's your score</p>
            <p className="score-number">{score} </p>
             </div>
    
        
    )
}

export default FinalScore