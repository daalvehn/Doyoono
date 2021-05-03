import React, { useEffect } from 'react'
import './Timer.css'

const Chrono = ({ index, timerRemains, setTimerRemains, isAnswersReveal }) => {
    useEffect(() => {
        const interval = setInterval(() => {
            if (timerRemains > 0) {
                isAnswersReveal
                    ? clearInterval(interval)
                    : setTimerRemains(timerRemains - 1)
            } else {
                clearInterval(interval)
                console.log('Time out !')
            }
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [timerRemains, index, isAnswersReveal])

    return (
        <div className="chronometer">
            <p>{timerRemains}</p>
        </div>
    )
}

export default Chrono
