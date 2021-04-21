import React from 'react'
import './DifficultyInput.css'

const RadioInput = ({name, difficultyValue, setQuestionDifficulty, questionDifficulty}) => (
    <div className="radio-button">
        <input type="radio" name={name}
            value={difficultyValue}
            onChange={(e) => setQuestionDifficulty(e.target.value) }
            id={name + difficultyValue}
            checked={questionDifficulty == difficultyValue}>
        </input>
        <label for={name + difficultyValue }>{difficultyValue}</label>
    </div>
)

export default RadioInput