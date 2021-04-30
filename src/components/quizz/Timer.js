import React, { useEffect } from 'react'
import './Timer.css'

const Chrono = ({ index, timerRemains, setTimerRemains }) => {
    useEffect(() => {
        const interval = setInterval(() => {
            if (timerRemains > 0) {
                setTimerRemains(timerRemains - 1)
                console.log(timerRemains)
            } else {
                clearInterval(interval)
                console.log('Time out !')
            }
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [timerRemains, index])

    return (
        <div className="chronometer">
            <p>{timerRemains}</p>
        </div>
    )
}

export default Chrono
