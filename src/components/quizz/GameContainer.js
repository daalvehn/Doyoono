import React from 'react'
import './GameContainer.css'
import Question from './Question'
import Answer from './Answer'
import QuestionCounter from './QuestionCounter'

const GameContainer = ({
    question,
    correct_answer,
    incorrect_answer0,
    incorrect_answer1,
    incorrect_answer2,
}) => {
    return (
        <div className="game-container">
            <QuestionCounter />
            <Question question={question} />
            <div className="answers-container">
                <Answer answer={correct_answer} />
                <Answer answer={incorrect_answer0} />
                <Answer answer={incorrect_answer1} />
                <Answer answer={incorrect_answer2} />
            </div>
        </div>
    )
}

export default GameContainer
