import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'
import './App.css'

function App() {
    const [todos, setTodos] = useState([])

    const addTodoHandler = (text) => {
        const newTodo = {
            text: text,
            isComplited: false,
            id: uuidv4(),
        }
        setTodos([...todos, newTodo]) //деструктаризация массива и добавление нового эл-та
    }
    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id)) //_ - не нужно значение, filter delete elem if isx !== index
    }

    const toogleTodoHandler = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, isComplited: !todo.isComplited }
                    : { ...todo }
            )
        ) //_ - не нужно значение, filter delete elem if isx !== index
    }

    const resetTodosHandler = () => {
        setTodos([])
    }

    const deleteCompletedTodosHandler = () => {
        setTodos(todos.filter((todo) => !todo.isComplited))
    }

    const complitedTodosCount = todos.filter((todo) => todo.isComplited).length

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodoHandler} />
            {
                //todos.length > 0
                !!todos.length && (
                    <TodosActions
                        complitedTodosExist={!!complitedTodosCount} //!! to logical type
                        resetTodos={resetTodosHandler}
                        deleteCompletedTodos={deleteCompletedTodosHandler}
                    />
                )
            }
            <TodoList
                todos={todos}
                deleteTodo={deleteTodoHandler}
                toggleTodo={toogleTodoHandler}
            />
            {
                //todos.length > 0
                !!complitedTodosCount && (
                    <h2>{`You have comleted ${complitedTodosCount} ${
                        complitedTodosCount > 1 ? 'todos' : 'todo'
                    }!`}</h2>
                )
            }
        </div>
    )
}

export default App
