import './App.css'
import ScoreField from './components/quizz/ScoreField'
import FinalMessage from './components/score/FinalMessage'
import FinalScore from './components/score/FinalScore'
import RetryButton from './components/score/RetryButton'

function App() {
    return (
        <div className="App">
            <ScoreField />
            <FinalMessage />
            <FinalScore />
            <RetryButton />
        </div>
    )
}

export default App
