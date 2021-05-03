import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './GameContainer.css'
import Question from './Question'
import Answer from './Answer'
import Timer from './Timer'
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
    amount,
    setScore,
    score,
}) => {
    const timerDuration = 10
    const [isAnswersReveal, setIsAnswersReveal] = useState(false)
    const [questionCounter, setQuestionCounter] = useState(1)
    const [randomAnswers, setRandomAnswers] = useState([])
    const [timerRemains, setTimerRemains] = useState(timerDuration)
    const [popScore, setPopScore] = useState(false)

    let history = useHistory()

    const NextQuestion = () => {
        index < quiz.length - 1 ? setIndex(index + 1) : ScorePage() //Increase question index, or -> scorepage if index = question number
    }

    const ScorePage = () => {
        //On va sur la page du score
        history.push('/score')
    }

    useEffect(() => {
        randomizeAnswers()
        setQuestionCounter(index + 1)
        setIsAnswersReveal(false)
        setTimerRemains(timerDuration)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index])

    //Randomize le display des réponses

    const answers = [
        correct_answer,
        incorrect_answer0,
        incorrect_answer1,
        incorrect_answer2,
    ]
    let correctAnswer = answers[0]

    const randomizeAnswers = () => {
        const answersToRandom = [...answers]
        let randomAnswersArray = []

        for (let i = 0; i < answersToRandom.length + 1; i++) {
            const random = Math.floor(Math.random() * answersToRandom.length)
            randomAnswersArray.unshift(answersToRandom[random])
            answersToRandom.splice(random, 1)
        }

        setRandomAnswers([...answersToRandom, ...randomAnswersArray])
    }

    return (
        <div className="game-container">
            <Timer
                index={index}
                timerRemains={timerRemains}
                setTimerRemains={setTimerRemains}
            />
            <div className="question">
                <QuestionCounter
                    questionCounter={questionCounter}
                    amount={amount}
                />
                <Question question={question} />
            </div>
            {popScore ? <div className="pop-score">+100</div> : undefined}
            <div className="answers-container">
                <Answer
                    answer={randomAnswers[0]}
                    correctAnswer={correctAnswer}
                    isAnswersReveal={isAnswersReveal}
                    setIsAnswersReveal={setIsAnswersReveal}
                    score={score}
                    setScore={setScore}
                    NextQuestion={NextQuestion}
                    setPopScore={setPopScore}
                />
                <Answer
                    answer={randomAnswers[1]}
                    correctAnswer={correctAnswer}
                    isAnswersReveal={isAnswersReveal}
                    setIsAnswersReveal={setIsAnswersReveal}
                    score={score}
                    setScore={setScore}
                    NextQuestion={NextQuestion}
                    setPopScore={setPopScore}
                />
                <Answer
                    answer={randomAnswers[2]}
                    correctAnswer={correctAnswer}
                    isAnswersReveal={isAnswersReveal}
                    setIsAnswersReveal={setIsAnswersReveal}
                    score={score}
                    setScore={setScore}
                    NextQuestion={NextQuestion}
                    setPopScore={setPopScore}
                />
                <Answer
                    answer={randomAnswers[3]}
                    correctAnswer={correctAnswer}
                    isAnswersReveal={isAnswersReveal}
                    setIsAnswersReveal={setIsAnswersReveal}
                    score={score}
                    setScore={setScore}
                    NextQuestion={NextQuestion}
                    setPopScore={setPopScore}
                />
            </div>
        </div>
    )
}

export default GameContainer
