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
}) => {
    return (
        <div>
            <div className="logo">
                <img alt="logo" src={logo} />
            </div>
            <form>
                <div className="name-input">
                    <NameInput userName={userName} setUserName={setUserName} />
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

const quizThemes = [
    { theme: 'General Knowledge', themeId: 9 },
    // { theme: 'Entertainment: Books', themeId: 10 },
    { theme: 'Movies', themeId: 11 },
    { theme: 'Music', themeId: 12 },
    // { theme: 'Entertainment: Musicals & Theatres', themeId: 13 },
    // { theme: 'Entertainment: Television', themeId: 14 },
    { theme: 'Video Games', themeId: 15 },
    // { theme: 'Entertainment: Board Games', themeId: 16 },
    { theme: 'Science & Nature', themeId: 17 },
    { theme: 'Science: Computers', themeId: 18 },
    // { theme: 'Science: Mathematics', themeId: 19 },
    // { theme: 'Mythology', themeId: 20 },
    // { theme: 'Sports', themeId: 21 },
    { theme: 'Geography', themeId: 22 },
    { theme: 'History', themeId: 23 },
    // { theme: 'Art', themeId: 25 },
    // { theme: 'Celebrities', themeId: 26 },
    // { theme: 'Animals', themeId: 27 },
    // { theme: 'Vehicles', themeId: 28 },
    // { theme: 'Entertainment: Comics', themeId: 29 },
    // { theme: 'Science: Gadgets', themeId: 30 },
    { theme: 'Japanese Anime & Manga', themeId: 31 },
    // { theme: 'Entertainment: Cartoon & Animation', themeId: 32 },
]
