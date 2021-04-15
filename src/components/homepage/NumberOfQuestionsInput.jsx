import React from 'react'
import './NumberOfQuestionsInput.css'
const NumberOfQuestionsInput = () => {
    return (
        <div className="form-control">
            <label for="amount">Number Of Questions</label>
            <input
                type="number"
                name="amount"
                className="form-input"
                min="1"
                max="50"
            />
        </div>
    )
}

export default NumberOfQuestionsInput
