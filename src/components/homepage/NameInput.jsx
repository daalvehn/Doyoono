import React from 'react'
import './Nameinput.css'

const NameInput = ({ userName, setUserName }) => {
    return (
        <div className="form-container">
            <form className="form">
                <h1>Enter Your User Name</h1>
                <input
                    className="user-name"
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </form>
        </div>
    )
}

export default NameInput
