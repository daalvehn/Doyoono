import React, { useState } from 'react'
import GameContainer from './GameContainer'
import ScoreField from './ScoreField'
import NameField from './NameField'
import './QuizContainer.css'

const QuizContainer = ({
    userName,
    quiz,
    questionCounter,
    setQuestionCounter,
    score,
    setScore
}) => {
    const [index, setIndex] = useState(0)

    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <NameField userName={userName} />
                <ScoreField score={score}/>
            </div>
            <GameContainer
                question={quiz[index].question}
                correct_answer={quiz[index].correct_answer}
                incorrect_answer0={quiz[index].incorrect_answers[0]}
                incorrect_answer1={quiz[index].incorrect_answers[1]}
                incorrect_answer2={quiz[index].incorrect_answers[2]}
                index={index}
                setIndex={setIndex}
                quiz={quiz}
                questionCounter={questionCounter}
                setQuestionCounter={setQuestionCounter}
                setScore={setScore}
                score={score}
            />
        </div>
    )
}

export default QuizContainer
