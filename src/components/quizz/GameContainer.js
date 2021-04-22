import React, { useState, useEffect } from 'react'
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
    questionCounter,
    setQuestionCounter,
}) => {
    const [isAnswersReveal, setIsAnswersReveal] = useState(false)

    const checkAnswer = () => {
        setIsAnswersReveal(true)
        setTimeout(NextQuestion, 2000)
    }

    const NextQuestion = () => {
        index < quiz.length - 1 && setIndex(index + 1)
        setIsAnswersReveal(false)
    }

    useEffect(() => {
        setQuestionCounter(index + 1)
        setIsAnswersReveal(false)
    }, [index])

    //Randomize le display des réponses
    const answers = [
        correct_answer,
        incorrect_answer0,
        incorrect_answer1,
        incorrect_answer2,
    ]
    const correctAnswer = answers[0]
    const answersToRandom = answers.map((ans) => ans)
    let randomAnswers = []

    for (let i = 0; i < answersToRandom.length + 1; i++) {
        const random = Math.floor(Math.random() * answersToRandom.length)
        randomAnswers.unshift(answersToRandom[random])
        answersToRandom.splice(random, 1)
    }
    randomAnswers = answersToRandom.concat(randomAnswers)

    return (
        <div className="game-container">
            <QuestionCounter questionCounter={questionCounter} />
            <Question question={question} />
            <div className="answers-container">
                <Answer
                    answer={randomAnswers[0]}
                    checkAnswer={checkAnswer}
                    correctAnswer={correctAnswer}
                    isAnswersReveal={isAnswersReveal}
                />
                <Answer
                    answer={randomAnswers[1]}
                    checkAnswer={checkAnswer}
                    correctAnswer={correctAnswer}
                    isAnswersReveal={isAnswersReveal}
                />
                <Answer
                    answer={randomAnswers[2]}
                    checkAnswer={checkAnswer}
                    correctAnswer={correctAnswer}
                    isAnswersReveal={isAnswersReveal}
                />
                <Answer
                    answer={randomAnswers[3]}
                    checkAnswer={checkAnswer}
                    correctAnswer={correctAnswer}
                    isAnswersReveal={isAnswersReveal}
                />
            </div>
        </div>
    )
}

export default GameContainer
