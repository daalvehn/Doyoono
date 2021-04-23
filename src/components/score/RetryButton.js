import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './RetryButton.css'
import useSound from 'use-sound'
import swoosh from '../../assets/audio/swoosh.mp3'
import notif from '../../assets/audio/notif.mp3'

const RetryButton = ({ setScore }) => {
    const [playNotif] = useSound(notif, { volume: 1 })
    const [playSwoosh] = useSound(swoosh, { volume: 0.1 })

    const handleOnClick = () => {
        setScore(0)
        playNotif()
    }
    return (
        <div
            className="div-button"
            onClick={handleOnClick}
            onMouseEnter={playSwoosh}
        >
            <Link to="/">Retry</Link>
        </div>
    )
}

export default RetryButton
