import React, { useState } from 'react'
import GameContainer from './GameContainer'
import ScoreField from './ScoreField'
import NameField from './NameField'
import './QuizContainer.css'

const QuizContainer = ({ userName, quiz }) => {
    const [index, setIndex] = useState(0)
    console.log(quiz)

    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <NameField userName={userName} />
                <ScoreField />
            </div>
            <GameContainer
                question={quiz[0].question}
                correct_answer={quiz[0].correct_answer}
                incorrect_answer0={quiz[0].incorrect_answers[0]}
                incorrect_answer1={quiz[0].incorrect_answers[1]}
                incorrect_answer2={quiz[0].incorrect_answers[2]}
                index={index}
                setIndex={setIndex}
            />
        </div>
    )
}

export default QuizContainer
