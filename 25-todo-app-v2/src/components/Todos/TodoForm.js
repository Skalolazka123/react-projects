import { useState } from 'react'
import Button from '../UI/Button'
import styles from './TodoForm.module.css'

function TodoForm({ addTodo }) {
    const [text, setText] = useState('')

    function onSubmitHandler(event) {
        event.preventDefault()
        if (text) {
            addTodo(text)
            setText('')
        }
    }

    function onChangeHandler(text) {
        setText(text)
    }

    return (
        <div className={styles.todoFromContainer}>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    value={text}
                    placeholder="Enter new todo"
                    onChange={(e) => onChangeHandler(e.target.value)}
                />
                <Button type="submit" title="Submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}
export default TodoForm
