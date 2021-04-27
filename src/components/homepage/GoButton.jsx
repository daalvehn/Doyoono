import React from 'react'
import './GoButton.css'
import { Link } from 'react-router-dom'
import useSound from 'use-sound'
import notif from '../../assets/audio/notif.mp3'
import swoosh from '../../assets/audio/swoosh.mp3'

const GoButton = () => {
    const [playNotif] = useSound(notif, { volume: 1 })
    const [playSwoosh] = useSound(swoosh, { volume: 0.1 })
    return (
        <div className="cta-btn">
            <Link
                onMouseEnter={() => playSwoosh()}
                onClick={() => playNotif()}
                to="/quiz"
            >
                go!
            </Link>
        </div>
    )
}

export default GoButton
