import React from 'react'
import './NumberOfQuestionsInput.css'
const NumberOfQuestionsInput = () => {
    return (
        <div>
            <div className="label" for="number-of-question">Number of Questions</div>
            <div className="nbr-qstn">
                <p className="nbr">10</p>
                <div className="increase-decrease-btn">
                    <div className="increase-btn">
                        <a></a>
                    </div>
                    <div className="decrease-btn">
                        <a></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NumberOfQuestionsInput
