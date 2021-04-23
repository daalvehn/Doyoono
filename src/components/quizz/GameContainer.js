import React from 'react'
import './GameContainer.css'
import Question from './Question'
import Answer from './Answer'
import QuestionCounter from './QuestionCounter'
import ScoreContainer from '../score/ScoreContainer'
import {useHistory} from "react-router-dom";

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
    
    let history = useHistory();
 
    const NextQuestion = () => {
         
        index < quiz.length - 1 ? setIndex(index + 1) : history.push("/score");
    }

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
            <QuestionCounter />
            <Question question={question} />
            <div className="answers-container">
                <Answer answer={randomAnswers[0]} nextquestion={NextQuestion} />
                <Answer answer={randomAnswers[1]} nextquestion={NextQuestion} />
                <Answer answer={randomAnswers[2]} nextquestion={NextQuestion} />
                <Answer answer={randomAnswers[3]} nextquestion={NextQuestion} />
            </div>
        </div>
    )
}

export default GameContainer
