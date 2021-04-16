import React from 'react'
import logo from '../assets/images/logo.svg'
import './MainContainer.css'
import HomepageContainer from './homepage/HomepageContainer'
import ScoreContainer from './score/ScoreContainer'
import QuizContainer from './quizz/QuizContainer'

const MainContainer = () => (
    <section className="container">
        <div className="main-container">
            <header>
                <img alt="logo" src={logo} />
            </header>
            <HomepageContainer />
            <QuizContainer />
            <ScoreContainer />
            <footer>
                <a>Ressources / Crédits</a>
            </footer>
        </div>
    </section>
)

export default MainContainer
