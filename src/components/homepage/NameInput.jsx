import React from 'react'
import './Nameinput.css'

const NameInput = ({ userName, setUserName }) => {
    return (
        <div className="form-container">
            <h1>Enter Your User Name</h1>
            <input
                placeholder="Player"
                className="user-name"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
        </div>
    )
}

export default NameInput
