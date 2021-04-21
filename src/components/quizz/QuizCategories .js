import React, { useEffect, useState } from 'react'
import axios from 'axios'

const QuizCategories = () => {
    const [categories, setCategories] = useState([])
    const fetchQuizCategories = async () => {
        const { data } = await axios.get('https://opentdb.com/api.php?amount=5')
        // const formattedData = data.results.map((category) => {
        //     const incorrectAnswersIndexes = category.incorrect_ansewrs.length;
        //     const randomIndex = Math.random(0,) * (incorrectAnswersIndexes -  0) + 0
        //     return {
        //         ...category,
        //         answers: category.incorrect_ansewrs.concat(
        //             category.correct_answer
        //         ),
        //     }
        // })
        setCategories(data.results)
    }

    useEffect(() => {
        fetchQuizCategories()
    }, [])
    console.log({ categories })

    return <div></div>
}

export default QuizCategories
