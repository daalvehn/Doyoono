import React from 'react'
import './NameField.css'

const NameField = ({ userName }) => {
    return (
        <div className="name-field">
            <p>{userName}</p>
        </div>
    )
}

export default NameField
