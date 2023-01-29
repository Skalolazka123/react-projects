import { useState } from 'react'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import './App.css'

function App() {
    const [todos, setTodos] = useState([])

    const addTodoHandler = (text) => {
        setTodos([...todos, text]) //деструктаризация массива и добавление нового эл-та
    }
    const deleteTodoHandler = (index) => {
        setTodos(todos.filter((_, idx) => idx !== index)) //_ - не нужно значение, filter delete elem if isx !== index
    }
    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodoHandler} />
            <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
        </div>
    )
}

export default App
