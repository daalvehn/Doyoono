import React from 'react'
import { Link } from 'react-router-dom'
import './RetryButton.css'
import useSound from 'use-sound'
import swoosh from '../../assets/audio/swoosh.mp3'
import notif from '../../assets/audio/notif.mp3'

const RetryButton = ({ setScore, score, setAmount, setCategory, setDifficulty }) => {
    const [playNotif] = useSound(notif, { volume: 1 })
    const [playSwoosh, { stopSwoosh }] = useSound(swoosh, { volume: 0.05 })

    const handleOnClick = () => {
        setScore(0)
        setAmount(10)
        setCategory(9)
        setDifficulty('easy')
        playNotif()

    }
    return (
        <div
            className="div-button"
            onClick={handleOnClick}
            onMouseEnter={playSwoosh}
            onMouseLeave={stopSwoosh}
        >
            <Link to="/">Retry</Link>
            
        </div>
    )
}

export default RetryButton
