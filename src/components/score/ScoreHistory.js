import React, { useState, useEffect } from 'react'
import './ScoreHistory.css'

const ScoreHistory = ({ score, userName }) => {
    const [scoreHistoric, setScoreHistoric] = useState([])
    const [nextScore, setNextScore] = useState()

    const fromStorage = localStorage.getItem('myScore') || []
    const scoreArray = fromStorage.split(',')
    // const copyScoreArray = [...scoreArray];
    console.log('to string :')
    console.log(scoreArray)
    // console.log(copyScoreArray)

    useEffect(() => {
        scoreArray.sort((a, b) => b - a)
        scoreArray.length = 4
        localStorage.setItem('myScore', `${score},${scoreArray.toString()}`)
        return () => {}
    }, [])

    return (
        <div>
            <p className="player-history">Player 5 last games</p>
            {scoreArray.map((scoreValue) => scoreValue && <p>{scoreValue} </p>)}
        </div>
    )
}

export default ScoreHistory
