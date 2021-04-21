import './App.css'
import MainContainer from './components/MainContainer'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
    // https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple
    const [quiz, setQuiz] = useState([])
    const [amount, setAmount] = useState(10)
    const [category, setCategory] = useState(9)
    const [difficulty, setDifficulty] = useState('easy')

    const fetchQuiz = async () => {
        const { data } = await axios.get(
            `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
        )
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
        setQuiz(data.results)
    }

    useEffect(() => {
        fetchQuiz()
    }, [])
    console.log(quiz)

    return (
        <div className="App">
            <MainContainer
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                category={category}
                setCategory={setCategory}
                amount={amount}
                setAmount={setAmount}
                quiz={quiz}
                setQuiz={setQuiz}
            />
        </div>
    )
}

export default App
