import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import Reset from './components/Reset'

function App() {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(count + 1)
    }

    return (
        <div className="App">
            <Counter count={count} />
            <Button onClick={incrementCount} />
            <Button onClick={incrementCount} />
            <Button onClick={incrementCount} />
            <Button onClick={incrementCount} />
            {/* if (count > 0 === false) we are not go to second part () */}
            {/* !!count => true/false */}
            {count > 0 && (
                <div>
                    <Reset onClick={setCount} />
                </div>
            )}
        </div>
    )
}

export default App
