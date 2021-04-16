import React from 'react'
import './NumberOfQuestionsInput.css'
const NumberOfQuestionsInput = () => {
    return (
        <div>
            <label for="number-of-question">Number of Questions</label>
            <div className="nbr-qstn">
                <div className="nbr">
                    <p>10</p>
                </div>
                <div className="increase-btn">
                    <a></a>
                </div>
                <div className="decrease-btn">
                    <a></a>
                </div>
            </div>
        </div>
    )
}

export default NumberOfQuestionsInput
