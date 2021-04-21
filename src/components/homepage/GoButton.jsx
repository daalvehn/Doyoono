import React from 'react';
import './GoButton.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

const GoButton = () => {
    return (
        <div className="cta-btn">
          <Link to="/quiz">go!</Link>
        </div>
    )
}

export default GoButton