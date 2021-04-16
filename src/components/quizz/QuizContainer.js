import React from 'react'
import GameContainer from './GameContainer'
import ScoreField from './ScoreField'
import NameField from './NameField'
import './QuizContainer.css'

const QuizContainer = ({ userName }) => (
    <div>
        <div className="quiz-header">
            <NameField userName={userName} />
            <ScoreField />
        </div>
        <GameContainer />
    </div>
)

export default QuizContainer
