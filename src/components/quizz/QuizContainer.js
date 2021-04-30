import React, { useState, useEffect } from 'react'
import GameContainer from './GameContainer'
import GameWaitData from './GameWaitData'
import ScoreField from './ScoreField'
import NameField from './NameField'
import './QuizContainer.css'
import axios from 'axios'
import music from '../../assets/audio/music.mp3'
import notif from '../../assets/audio/notif.mp3'
import logo from '../../assets/images/logo.svg'
import { useHistory } from 'react-router-dom'

const QuizContainer = ({
    userName,
    quiz,
    setQuiz,
    amount,
    score,
    setScore,
    difficulty,
    category,
    setAmount,
    setCategory,
    setDifficulty,
}) => {
    const [index, setIndex] = useState(0)

    const musicPlay = new Audio(music)
    const notifPlay = new Audio(notif)

    const handleSound = () => {
        musicPlay.volume = 0.01
        musicPlay.loop = true
        musicPlay.play()
        notifPlay.play()
    }

    const fetchQuiz = async () => {
        const { data } = await axios
            .get(
                `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
            )
            .catch((error) => {
                console.log(error)
            })
        setQuiz(data.results)
    }

    useEffect(() => {
        handleSound()
        fetchQuiz()
        return () => {
            setQuiz([])
            musicPlay.pause()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //Go back home depuis logo
    const history = useHistory()

    const GoBackHome = () => {
        setScore(0)
        setAmount(10)
        setCategory(9)
        setDifficulty('easy')
        history.push('/')
    }

    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <NameField userName={userName} />
                <div className="logo">
                    <img alt="logo" src={logo} onClick={GoBackHome} />
                </div>
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
                <GameWaitData />
            )}
        </div>
    )
}

export default QuizContainer
