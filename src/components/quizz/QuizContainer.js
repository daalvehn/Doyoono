import React, { useState, useEffect } from 'react'
import GameContainer from './GameContainer'
import ScoreField from './ScoreField'
import NameField from './NameField'
import './QuizContainer.css'
import axios from 'axios'

const QuizContainer = ({
    userName,
    quiz,
    setQuiz,
    amount,
    score,
    setScore,
    difficulty,
    category,
}) => {
    const [index, setIndex] = useState(0)

    const fetchQuiz = async () => {
        const { data } = await axios.get(
            `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
        )
        setQuiz(data.results)
    }

    useEffect(() => {
        fetchQuiz()
    }, [])

    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <NameField userName={userName} />
                <ScoreField score={score} />
            </div>
            {quiz.length > 0 ? (
                <GameContainer
                    question={quiz[index].question}
                    correct_answer={quiz[index].correct_answer}
                    incorrect_answer0={quiz[index].incorrect_answers[0]}
                    incorrect_answer1={quiz[index].incorrect_answers[1]}
                    incorrect_answer2={quiz[index].incorrect_answers[2]}
                    index={index}
                    setIndex={setIndex}
                    quiz={quiz}
                    amount={amount}
                    setScore={setScore}
                    score={score}
                />
            ) : (
                'NO DATA'
            )}
        </div>
    )
}

export default QuizContainer
