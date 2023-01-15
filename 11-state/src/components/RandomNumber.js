import { useState } from 'react'
import './RandomNumber.css'
import generateRandomNum from '../utils/generateRandomNum'
import copyTextToClipboard from '../utils/copyTextToClipboard'

function RandomNumber(props) {
    const { maxNum } = props
    const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum))
    const changeRandomNum = () => {
        setRandomNum(generateRandomNum(maxNum))
    }

    return (
        <div>
            <h1
                title="click to copy"
                value={randomNum}
                onClick={copyTextToClipboard}
            >
                {randomNum}
            </h1>
            <button onClick={changeRandomNum}>
                Generate new random number
            </button>
        </div>
    )
}

export default RandomNumber
