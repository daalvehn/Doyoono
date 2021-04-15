import './App.css'
import DifficultyInput from './components/homepage/DifficultyInput/DifficultyInput'
import NameInput from './components/homepage/NameInput'
import NumberOfQuestionsInput from './components/homepage/NumberOfQuestionsInput'
import ThemeInput from './components/homepage/ThemeInput'
import NameField from './components/quizz/NameField'
import GameContainer from './components/quizz/GameContainer'
import FinalMessage from './components/score/FinalMessage'
import FinalScore from './components/score/FinalScore'
import RetryButton from './components/score/RetryButton'
import { useState } from 'react'
import MainContainer from './components/MainContainer'

function App() {
    const [userName, setUserName] = useState('')

    return (
        <div className="App">
            <NameInput userName={userName} setUserName={setUserName} />
            <NumberOfQuestionsInput />
            <DifficultyInput />
            <ThemeInput />
            <NameField userName={userName} />
            <GameContainer />
            <FinalMessage userName={userName} />
            <FinalScore />
            <RetryButton />
            <MainContainer />
        </div>
    )
}

export default App
