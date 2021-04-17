import React from 'react'
import './DifficultyInput.css'
import RadioInput from './RadioInput'

const difficulty = {
    easy: 'easy',
    medium: 'medium',
    hard: 'hard',
}

const radioInputName = 'difficulty'

const DifficultyInput = () => (
    <div className="difficulty-input">
        <div className="label">Difficulty</div>
        <div className="radio-input">
            <RadioInput name={radioInputName} difficulty={difficulty.easy} />
            <RadioInput name={radioInputName} difficulty={difficulty.medium} />
            <RadioInput name={radioInputName} difficulty={difficulty.hard} />
        </div>
    </div>
)

export default DifficultyInput
