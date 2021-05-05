import React from 'react'
import './NumberOfQuestionsInput.css'
const NumberOfQuestionsInput = ({ amount, setAmount }) => {
    return (
        <div className="form-control">
            <div className="label" htmlFor="number_questions">
                Number of questions
            </div>
            <select
                name="number-questions"
                id="number_questions"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            >
                <option defaultValue="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
        </div>
    )
}

export default NumberOfQuestionsInput
