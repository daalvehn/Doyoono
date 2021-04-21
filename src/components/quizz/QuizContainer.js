import React from 'react'
import GameContainer from './GameContainer'
import ScoreField from './ScoreField'
import NameField from './NameField'
import './QuizContainer.css'

const QuizContainer = ({ userName, quiz }) => (
    <div className="quiz-container">
        <div className="quiz-header">
            <NameField userName={userName} />
            <ScoreField />
        </div>
        {quiz.map((item, index) => (
            <GameContainer
                key={item.index}
                question={item.question}
                correct_answer={item.correct_answer}
                incorrect_answer0={item.incorrect_answers[0]}
                incorrect_answer1={item.incorrect_answers[1]}
                incorrect_answer2={item.incorrect_answers[2]}
            />
        ))}
    </div>
)

export default QuizContainer
