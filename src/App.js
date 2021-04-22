import './App.css'
import MainContainer from './components/MainContainer'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
    const [quiz, setQuiz] = useState([])
    const [amount, setAmount] = useState(10)
    const [category, setCategory] = useState(9)
    const [difficulty, setDifficulty] = useState('easy')
    const [isLoading, setIsLoading] = useState(false)

    const fetchQuiz = async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.get(
                `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
            )
            setQuiz(data.results)
            setIsLoading(false)
        } catch (error) {
            console.log('ERROR :', error)
        }
    }

    useEffect(() => {
        fetchQuiz()
        console.log(quiz)
    }, [])

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className="App">
            {/* <MainContainer
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                category={category}
                setCategory={setCategory}
                amount={amount}
                setAmount={setAmount}
                quiz={quiz}
                setQuiz={setQuiz}
            /> */}
        </div>
    )
}

export default App
