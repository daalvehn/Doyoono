import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import './MainContainer.css'
import HomepageContainer from './homepage/HomepageContainer'
import ScoreContainer from './score/ScoreContainer'
import QuizContainer from './quizz/QuizContainer'

const MainContainer = ({
    difficulty,
    setDifficulty,
    setCategory,
    amount,
    setAmount,
    quiz,
    setQuiz,
}) => {
    const [userName, setUserName] = useState('Michel')
    return (
        <section className="container">
            <Router>
                <ul>
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
                    <header>
                        <img alt="logo" src={logo} />
                    </header>

                    <Switch>
                        <Route exact path="/">
                            <HomepageContainer
                                userName={userName}
                                setUserName={setUserName}
                                difficulty={difficulty}
                                setDifficulty={setDifficulty}
                                setCategory={setCategory}
                                amount={amount}
                                setAmount={setAmount}
                                quiz={quiz}
                                setQuiz={setQuiz}
                            />
                        </Route>
                        <Route path="/quiz">
                            <QuizContainer
                                userName={userName}
                                quiz={quiz}
                                amount={amount}
                            />
                        </Route>
                        <Route path="/score">
                            <ScoreContainer userName={userName} />
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
