import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './MainContainer.css'
import HomepageContainer from './homepage/HomepageContainer'
import ScoreContainer from './score/ScoreContainer'
import QuizContainer from './quizz/QuizContainer'

const MainContainer = () => {
    const [score, setScore] = useState(0)
    const [userName, setUserName] = useState('Player')
    const [quiz, setQuiz] = useState([])
    const [amount, setAmount] = useState(3)
    const [category, setCategory] = useState(9)
    const [difficulty, setDifficulty] = useState('easy')

    return (
        <section className="container">
            <Router>
                <ul className="nav">
                    <li>
                        <Link to="/">Homepage</Link>
                    </li>
                    <li>
                        <Link to="/quiz">Quiz</Link>
                    </li>
                    <li>
                        <Link to="/score">Score</Link>
                    </li>
                </ul>
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
                            />
                        </Route>
                    </Switch>
                    <footer>
                        <a>Ressources / Crédits</a>
                    </footer>
                </div>
            </Router>
        </section>
    )
}
export default MainContainer
