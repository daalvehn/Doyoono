import './App.css'
import MainContainer from './components/MainContainer'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
    const [quiz, setQuiz] = useState([])
    const [amount, setAmount] = useState(10)
    const [category, setCategory] = useState('')
    const [difficulty, setDifficulty] = useState('easy')
    const [questionCounter, setQuestionCounter] = useState(1)

    const fetchQuiz = async () => {
        const { data } = await axios.get(
            `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
        )
        setQuiz(data.results)
    }
    console.log(category)
    useEffect(() => {
        fetchQuiz()
    }, [])

    return (
        <div className="App">
            {quiz.length > 0 ? (
                <MainContainer
                    difficulty={difficulty}
                    setDifficulty={setDifficulty}
                    setCategory={setCategory}
                    amount={amount}
                    setAmount={setAmount}
                    quiz={quiz}
                    setQuiz={setQuiz}
                    questionCounter={questionCounter}
                    setQuestionCounter={setQuestionCounter}
                />
            ) : (
                'NO DATA'
            )}
        </div>
    )
}

export default App
