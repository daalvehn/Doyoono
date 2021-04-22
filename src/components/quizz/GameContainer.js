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
    index,
    setIndex,
    quiz,
}) => {
    const NextQuestion = () => {
        index < quiz.length - 1 && setIndex(index + 1)
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
                <Answer answer={correct_answer} nextquestion={NextQuestion} />
                <Answer
                    answer={incorrect_answer0}
                    nextquestion={NextQuestion}
                />
                <Answer
                    answer={incorrect_answer1}
                    nextquestion={NextQuestion}
                />
                <Answer
                    answer={incorrect_answer2}
                    nextquestion={NextQuestion}
                />
            </div>
        </div>
    )
}

export default GameContainer
