import './App.css'
import PetInfo from './components/PetInf'

function App() {
    return (
        <div className="App">
            <PetInfo animal="cat" age="2" />
            <PetInfo animal="dog" age={3} />
            <PetInfo />
        </div>
    )
}

export default App
