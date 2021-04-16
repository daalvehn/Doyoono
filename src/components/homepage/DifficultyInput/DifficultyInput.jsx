import React from 'react'
import './DifficultyInput.css'
import RadioInput from './RadioInput'



const radioInputName = 'difficulty'

const DifficultyInput = ({questionDifficulty, setQuestionDifficulty, difficultyValues}) => (
    <div className="difficulty-input">
        <label>Difficulty</label>
        <fieldset>
            <RadioInput name={radioInputName} difficultyValue={difficultyValues.easy} setQuestionDifficulty={setQuestionDifficulty} questionDifficulty={questionDifficulty} />
            <RadioInput name={radioInputName} difficultyValue={difficultyValues.medium} setQuestionDifficulty={setQuestionDifficulty} questionDifficulty={questionDifficulty} />
            <RadioInput name={radioInputName} difficultyValue={difficultyValues.hard} setQuestionDifficulty={setQuestionDifficulty} questionDifficulty={questionDifficulty} />
        </fieldset>
    </div>
)

export default DifficultyInput
