import React from 'react'
import logo from '../assets/images/logo.svg'
import './MainContainer.css'
import HomepageContainer from './homepage/HomepageContainer'
import ScoreContainer from './score/ScoreContainer'
import QuizContainer from './quizz/QuizContainer'
import { useState } from 'react'

const MainContainer = ({
    difficulty,
    setDifficulty,
    category,
    setCategory,
    amount,
    setAmount,
    quiz,
    setQuiz,
}) => {
    const [userName, setUserName] = useState('Michel')
    return (
        <section className="container">
            <div className="main-container">
                <header>
                    <img alt="logo" src={logo} />
                </header>
                <HomepageContainer
                    userName={userName}
                    setUserName={setUserName}
                    difficulty={difficulty}
                    setDifficulty={setDifficulty}
                    category={category}
                    setCategory={setCategory}
                    amount={amount}
                    setAmount={setAmount}
                    quiz={quiz}
                    setQuiz={setQuiz}
                />
                <QuizContainer userName={userName} quiz={quiz} />
                <ScoreContainer userName={userName} />
                <footer>
                    <a>Ressources / Crédits</a>
                </footer>
            </div>
        </section>
    )
}
export default MainContainer
