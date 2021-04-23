import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './RetryButton.css'

const RetryButton = ({ setScore }) => {
    return (
        <div className="div-button" onClick={() => setScore(0)}>
            <Link to="/">Retry</Link>
        </div>
    )
}

export default RetryButton
