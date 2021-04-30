import React from 'react'
import './DifficultyInput.css'
import RadioInput from './RadioInput'



const radioInputName = 'difficulty'

const DifficultyInput = ({difficulty, setDifficulty, difficultyValues}) => (
    <div className="difficulty-input">
        <label className="label">Difficulty</label>
        <fieldset>
            <RadioInput name={radioInputName} difficultyValue={difficultyValues.easy} setDifficulty={setDifficulty} difficulty={difficulty} />
            <RadioInput name={radioInputName} difficultyValue={difficultyValues.medium} setDifficulty={setDifficulty} difficulty={difficulty} />
            <RadioInput name={radioInputName} difficultyValue={difficultyValues.hard} setDifficulty={setDifficulty} difficulty={difficulty} />
        </fieldset>
    </div>
)

export default DifficultyInput
