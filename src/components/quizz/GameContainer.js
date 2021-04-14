import React from 'react'
import './GameContainer.css'
import Question from './Question'
import Answer from './Answer'
import QuestionCounter from './QuestionCounter'

const GameContainer = () => {
    return (
        <div className="game-container">
            <QuestionCounter />
            <Question />
            <div className="answers-container">
                <Answer />
                <Answer />
                <Answer />
                <Answer />
            </div>
        </div>
    )
}

export default GameContainer
