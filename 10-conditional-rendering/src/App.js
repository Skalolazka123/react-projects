import './App.css'
import PetInfo from './components/PetInf'

function App() {
    return (
        <div className="App">
            <PetInfo animal="cat" age={2} hasPet />
            <PetInfo animal="dog" age={3} hasPet={true} />
            <PetInfo hasPet={false} />
        </div>
    )
}

export default App
