import React from 'react'
import logo from '../assets/images/logo.svg'
import './MainContainer.css'
import HomepageContainer from './homepage/HomepageContainer'
import ScoreContainer from './score/ScoreContainer'
import QuizContainer from './quizz/QuizContainer'
import { useState } from 'react'

const MainContainer = () => {
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
                />
                <QuizContainer userName={userName} setUserName={setUserName} />
                <ScoreContainer userName={userName} setUserName={setUserName} />
                <footer>
                    <a>Ressources / Crédits</a>
                </footer>
            </div>
        </section>
    )
}
export default MainContainer
