import React, { useState } from 'react'
import NameInput from './NameInput'
import NumberOfQuestionsInput from './NumberOfQuestionsInput'
import GoButton from './GoButton'
import ThemeInput from './ThemeInput'
import DifficultyInput from './DifficultyInput/DifficultyInput'
import './HomepageContainer.css'


const HomepageContainer = ({ userName, setUserName, difficulty, setDifficulty }) => {

    return (
        <div>
            <form>
                <div className="name-input">
                    <NameInput userName={userName} setUserName={setUserName} />
                </div>
                <div className="quiz-properties">
                    <ThemeInput />
                    <DifficultyInput  setDifficulty={setDifficulty} difficulty={difficulty} difficultyValues={difficultyValues}/>
                    <NumberOfQuestionsInput />
                </div>
                <div className="go-btn">
                    <GoButton />
                </div>
            </form>
        </div>
    )
}

export default HomepageContainer

const difficultyValues = {
    easy: 'easy',
    medium: 'medium',
    hard: 'hard',
}