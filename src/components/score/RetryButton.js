import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './RetryButton.css'
import useSound from 'use-sound'
import swoosh from '../../assets/audio/swoosh.mp3'
import notif from '../../assets/audio/notif.mp3'

const RetryButton = () => {
    const [playNotif] = useSound(notif, { volume: 3 })
    const [playSwoosh] = useSound(swoosh, { volume: 0.2 })
    return (
        <div className="div-button">
            <Link
                onMouseEnter={() => playSwoosh()}
                onClick={() => playNotif()}
                to="/"
            >
                Retry
            </Link>
        </div>
    )
}

export default RetryButton
