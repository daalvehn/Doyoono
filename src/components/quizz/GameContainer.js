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
    const NextQuestion = () => {
        console.log('hello')
    }
    ////Randomize le display des réponses
    // let answers = [
    //     correct_answer,
    //     incorrect_answer0,
    //     incorrect_answer1,
    //     incorrect_answer2,
    // ]
    // let randomAnswers = []

    // for (let i = 0; i < answers.length + 1; i++) {
    //     const random = Math.floor(Math.random() * answers.length)
    //     randomAnswers.unshift(answers[random])
    //     answers.splice(random, 1)
    // }

    // randomAnswers = answers.concat(randomAnswers)

    // console.log(randomAnswers)
    //// randomAnswers[i] === answers[0] ? "correct" : "wrong"

    return (
        <div className="game-container">
            <QuestionCounter />
            <Question question={question} />
            <div className="answers-container">
                <Answer answer={correct_answer} onClick={NextQuestion} />
                <Answer answer={incorrect_answer0} onClick={NextQuestion} />
                <Answer answer={incorrect_answer1} onClick={NextQuestion} />
                <Answer answer={incorrect_answer2} onClick={NextQuestion} />
            </div>
        </div>
    )
}

export default GameContainer
