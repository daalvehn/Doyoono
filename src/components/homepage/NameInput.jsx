import React from 'react'
import './Nameinput.css'

const NameInput = () => {
    return (
        <div className="form-container">
            <form className="form">
                <h1>Enter Your User Name</h1>
                <input className="user-name" type="text"></input>
            </form>
        </div>
    )
}

export default NameInput
