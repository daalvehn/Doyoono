import React from 'react'
import './NumberOfQuestionsInput.css'
const NumberOfQuestionsInput = ({ amount, setAmount }) => {
    console.log(amount)
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
        // <div>
        //     <div className="label" htmlFor="number-of-question">
        //         Number of Questions
        //     </div>
        //     <div className="nbr-qstn">
        //         <p className="nbr">10</p>
        //         <div className="increase-decrease-btn">
        //             <div className="increase-btn">
        //                 <a></a>
        //             </div>
        //             <div className="decrease-btn">
        //                 <a></a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default NumberOfQuestionsInput
