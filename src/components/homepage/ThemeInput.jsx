import React from 'react'
import './ThemeInput.css'
const ThemeInput = () => {
    return (
        <div className="form-control">
            <label for="category">Theme</label>
            <select name="category" id="category">
                <option selected="selected" value="History">
                    History
                </option>
                <option value="Mythology">Mythology</option>
                <option value="Sport">Sport</option>
                <option value="Video Game">Video Game</option>
                <option value="Animal">Animal</option>
            </select>
        </div>
    )
}

export default ThemeInput
