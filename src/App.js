import './App.css'
import NameInput from './components/homepage/NameInput'
import NumberOfQuestionsInput from './components/homepage/NumberOfQuestionsInput'
import ThemeInput from './components/homepage/ThemeInput'

function App() {
    return (
        <div className="App">
            <NameInput />
            <ThemeInput />
            <NumberOfQuestionsInput />
        </div>
    )
}

export default App
