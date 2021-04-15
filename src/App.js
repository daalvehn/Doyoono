import './App.css'
import DifficultyInput from './components/homepage/DifficultyInput/DifficultyInput'
import NameInput from './components/homepage/NameInput'
import NumberOfQuestionsInput from './components/homepage/NumberOfQuestionsInput'

function App() {
    return (
        <div className="App">
            <DifficultyInput />
            <NameInput />
            <NumberOfQuestionsInput />
        </div>
    )
}

export default App
