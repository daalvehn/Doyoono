import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './MainContainer.css'
import './footer/modal.css'
import HomepageContainer from './homepage/HomepageContainer'
import ScoreContainer from './score/ScoreContainer'
import QuizContainer from './quizz/QuizContainer'
import Footer from './footer/Footer'

const MainContainer = () => {
    const [score, setScore] = useState(0)
    const [userName, setUserName] = useState('Player')
    const [quiz, setQuiz] = useState([])
    const [amount, setAmount] = useState(10)
    const [category, setCategory] = useState(9)
    const [difficulty, setDifficulty] = useState('easy')

    const quizThemes = [
        { theme: 'General Knowledge', themeId: 9 },
        { theme: 'Movies', themeId: 11 },
        { theme: 'Music', themeId: 12 },
        { theme: 'Video Games', themeId: 15 },
        { theme: 'Science & Nature', themeId: 17 },
        { theme: 'Science: Computers', themeId: 18 },
        { theme: 'Geography', themeId: 22 },
        { theme: 'History', themeId: 23 },
        { theme: 'Japanese Anime & Manga', themeId: 31 },
    ]

    return (
        <div className="container">
            <Router>
                <div className="main-container">
                    <Switch>
                        <Route exact path="/">
                            <HomepageContainer
                                userName={userName}
                                setUserName={setUserName}
                                difficulty={difficulty}
                                setDifficulty={setDifficulty}
                                category={category}
                                setCategory={setCategory}
                                amount={amount}
                                setAmount={setAmount}
                                quizThemes={quizThemes}
                            />
                        </Route>
                        <Route path="/quiz">
                            <QuizContainer
                                userName={userName}
                                quiz={quiz}
                                setQuiz={setQuiz}
                                amount={amount}
                                score={score}
                                setScore={setScore}
                                difficulty={difficulty}
                                category={category}
                                setAmount={setAmount}
                                setCategory={setCategory}
                                setDifficulty={setDifficulty}
                            />
                        </Route>
                        <Route path="/score">
                            <ScoreContainer
                                userName={userName}
                                score={score}
                                setScore={setScore}
                                setDifficulty={setDifficulty}
                                setAmount={setAmount}
                                setCategory={setCategory}
                                category={category}
                                difficulty={difficulty}
                                quizThemes={quizThemes}
                            />
                        </Route>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </div>
    )
}
export default MainContainer
