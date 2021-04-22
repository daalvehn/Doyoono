import React from 'react'
import './DifficultyInput.css'

const RadioInput = ({name, difficultyValue, setDifficulty, difficulty}) => (
    <div className="radio-button">
        <input type="radio" name={name}
            value={difficultyValue}
            onChange={(e) => setDifficulty(e.target.value) }
            id={name + difficultyValue}
            checked={difficulty == difficultyValue}>
        </input>
        <label for={name + difficultyValue }>{difficultyValue}</label>
    </div>
)

export default RadioInput