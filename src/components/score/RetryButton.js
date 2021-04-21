import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './RetryButton.css';

const RetryButton = () => {
    return (
        <div className="div-button">
            {/* <a href="">Retry</a> */}
            <Link to="/">Retry</Link>
        </div>
    )
}


export default RetryButton