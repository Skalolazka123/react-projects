import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import Reset from './components/Reset'

const btnTexts = ['Click me 1!', 'Click me 2!', 'Click me 3!', 'Click me 4!']
function App() {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(count + 1)
    }

    return (
        <div className="App">
            <Counter count={count} />
            {btnTexts.map((btnText, index) => {
                return (
                    <Button
                        text={btnText}
                        onClick={incrementCount}
                        key={index}
                    />
                )
            })}

            {/* {[
                <Button text={btnTexts[0]} onClick={incrementCount} />,
                <Button text={btnTexts[1]} onClick={incrementCount} />,
                <Button text={btnTexts[2]} onClick={incrementCount} />,
                <Button text={btnTexts[3]} onClick={incrementCount} />,
            ]} */}

            <Reset onClick={setCount} />
        </div>
    )
}

export default App
