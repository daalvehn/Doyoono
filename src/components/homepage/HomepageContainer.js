import React from 'react'
import NameInput from './NameInput'
import NumberOfQuestionsInput from './NumberOfQuestionsInput'
import GoButton from './GoButton'
import ThemeInput from './ThemeInput'
import DifficultyInput from './DifficultyInput/DifficultyInput'
import './HomepageContainer.css'
import logo from '../../assets/images/logo.svg'

const HomepageContainer = ({
    userName,
    setUserName,
    difficulty,
    setDifficulty,
    amount,
    setAmount,
    setCategory,
    quizThemes,
}) => {
    return (
        <div className="homepage-container">
            <div className="logo">
                <img alt="logo" src={logo} />
            </div>
            <div className="homepage-inputs">
                <div>
                    <div className="name-input">
                        <NameInput
                            userName={userName}
                            setUserName={setUserName}
                        />
                    </div>
                    <div className="quiz-properties">
                        <ThemeInput
                            quizThemes={quizThemes}
                            setCategory={setCategory}
                        />
                        <DifficultyInput
                            setDifficulty={setDifficulty}
                            difficulty={difficulty}
                            difficultyValues={difficultyValues}
                        />
                        <NumberOfQuestionsInput
                            amount={amount}
                            setAmount={setAmount}
                        />
                    </div>
                    <div className="go-btn">
                        <GoButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomepageContainer

const difficultyValues = {
    easy: 'easy',
    medium: 'medium',
    hard: 'hard',
}
