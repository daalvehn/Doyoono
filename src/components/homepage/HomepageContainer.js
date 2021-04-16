import React from 'react'
import NameInput from './NameInput'
import NumberOfQuestionsInput from './NumberOfQuestionsInput'
import GoButton from './GoButton'
import ThemeInput from './ThemeInput'
import DifficultyInput from './DifficultyInput/DifficultyInput'
import './HomepageContainer.css'

const HomepageContainer = () => {
    return (
        <div>
            <form>
                <NameInput />
                <span className="quiz-properties">
                    <NumberOfQuestionsInput />
                    <DifficultyInput />
                    <ThemeInput />
                </span>
                <GoButton />
            </form>
        </div>
    )
}

export default HomepageContainer
