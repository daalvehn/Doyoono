import React from 'react'
import './DifficultyInput.css'

const RadioInput = (props) => (
    <div className="radio-button">
        <input type="radio" name={props.name} value={props.difficulty} id={props.name + props.difficulty}></input>
        <label for={props.name + props.difficulty }>{props.difficulty}</label>
    </div>
)

export default RadioInput