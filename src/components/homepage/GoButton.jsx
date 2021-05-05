import React from 'react'
import './GoButton.css'
import { Link } from 'react-router-dom'
import useSound from 'use-sound'
import swoosh from '../../assets/audio/swoosh.mp3'

const GoButton = () => {
    const [playSwoosh, { stopSwoosh }] = useSound(swoosh, { volume: 0.2 })

    return (
        <div className="cta-btn">
            <Link
                onMouseEnter={playSwoosh}
                onMouseLeave={stopSwoosh}
                to="/quiz"
            >
                go!
            </Link>
        </div>
    )
}

export default GoButton
