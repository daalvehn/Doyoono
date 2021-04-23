import React from 'react'
import './ThemeInput.css'
const ThemeInput = ({ quizThemes, setCategory }) => {
    const handlChange = (e) => {
        const themeSelected = quizThemes.find(
            (cat) => cat.theme === e.target.value
        )
        const categoryId = Object.values(themeSelected)[1]

        setCategory(categoryId)
    }

    return (
        <div className="form-control">
            <div className="label" htmlFor="category">
                Theme
            </div>
            <select name="category" id="category" onChange={handlChange}>
                {quizThemes.map((item) => (
                    <option value={item.theme}>{item.theme}</option>
                ))}
            </select>
        </div>
    )
}

export default ThemeInput
