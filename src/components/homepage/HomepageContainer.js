import React from 'react'
import NameInput from './NameInput'
import NumberOfQuestionsInput from './NumberOfQuestionsInput'
import GoButton from './GoButton'
import ThemeInput from './ThemeInput'
import DifficultyInput from './DifficultyInput/DifficultyInput'
import './HomepageContainer.css'

const HomepageContainer = ({ userName, setUserName }) => {
    return (
        <div>
            <form className="homepage-form">
                <NameInput userName={userName} setUserName={setUserName} />
                <span className="quiz-properties">
                    <ThemeInput />
                    <DifficultyInput />
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
