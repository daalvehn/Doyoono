import React, { useState, useEffect } from 'react'
import './GameContainer.css'
import Question from './Question'
import Answer from './Answer'
import QuestionCounter from './QuestionCounter'
import { useHistory } from 'react-router-dom'
import useSound from 'use-sound'
import correct from '../../assets/audio/correct.mp3'
import yeah from '../../assets/audio/yeah.mp3'

const GameContainer = ({
    question,
    correct_answer,
    incorrect_answer0,
    incorrect_answer1,
    incorrect_answer2,
    index,
    setIndex,
    quiz,
    amount,
    setScore,
    score,
}) => {
    const [isAnswersReveal, setIsAnswersReveal] = useState(false)
    const [userAnswer, setUserAnswer] = useState('')
    const [questionCounter, setQuestionCounter] = useState(1)
    const [playCorrect] = useSound(correct, { volume: 1 })
    const [playYeah] = useSound(yeah, { volume: 0.02 })

    let history = useHistory()

    const checkAnswer = (e) => {
        e.preventDefault()
        playCorrect()
        setUserAnswer(e.target.value)
        setIsAnswersReveal(true)
        setTimeout(NextQuestion, 2500)
    }

    const NextQuestion = () => {
        index < quiz.length - 1 ? setIndex(index + 1) : ScorePage()
    }

    const ScorePage = () => {
        playYeah()
        history.push('/score')
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
            <QuestionCounter
                questionCounter={questionCounter}
                amount={amount}
            />
            <Question question={question} />
            <div className="answers-container">
                <Answer
                    answer={randomAnswers[0]}
                    correctAnswer={correctAnswer}
                    isAnswersReveal={isAnswersReveal}
                    setIsAnswersReveal={setIsAnswersReveal}
                    score={score}
                    setScore={setScore}
                    NextQuestion={NextQuestion}
                />
                <Answer
                    answer={randomAnswers[1]}
                    correctAnswer={correctAnswer}
                    isAnswersReveal={isAnswersReveal}
                    setIsAnswersReveal={setIsAnswersReveal}
                    score={score}
                    setScore={setScore}
                    NextQuestion={NextQuestion}
                />
                <Answer
                    answer={randomAnswers[2]}
                    correctAnswer={correctAnswer}
                    isAnswersReveal={isAnswersReveal}
                    setIsAnswersReveal={setIsAnswersReveal}
                    score={score}
                    setScore={setScore}
                    NextQuestion={NextQuestion}
                />
                <Answer
                    answer={randomAnswers[3]}
                    correctAnswer={correctAnswer}
                    isAnswersReveal={isAnswersReveal}
                    setIsAnswersReveal={setIsAnswersReveal}
                    score={score}
                    setScore={setScore}
                    NextQuestion={NextQuestion}
                />
            </div>
        </div>
    )
}

export default GameContainer
