import './App.css'
import MainContainer from './components/MainContainer'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
    const [quiz, setQuiz] = useState([])
    const [amount, setAmount] = useState(10)
    const [category, setCategory] = useState(9)
    const [difficulty, setDifficulty] = useState('easy')

    const fetchQuiz = async () => {
        const { data } = await axios.get(
            `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
        )
        setQuiz(data.results)
    }

    useEffect(() => {
        fetchQuiz()
    }, [])

    return (
        <div className="App">
            {quiz.length > 0 ? (
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
            ) : (
                'NO DATA'
            )}
        </div>
    )
}

export default App
