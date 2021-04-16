import React, { useState } from 'react'
import NameInput from './NameInput'
import NumberOfQuestionsInput from './NumberOfQuestionsInput'
import GoButton from './GoButton'
import ThemeInput from './ThemeInput'
import DifficultyInput from './DifficultyInput/DifficultyInput'
import './HomepageContainer.css'


const HomepageContainer = ({ userName, setUserName }) => {

    const [questionDifficulty, setQuestionDifficulty] = useState(difficultyValues.easy)

    return (
        <div>
            <form className="homepage-form">
                <NameInput userName={userName} setUserName={setUserName} />
                <span className="quiz-properties">
                    <ThemeInput />
                    <DifficultyInput  setQuestionDifficulty={setQuestionDifficulty} questionDifficulty={questionDifficulty} difficultyValues={difficultyValues}/>
                    <NumberOfQuestionsInput />
                </span>
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