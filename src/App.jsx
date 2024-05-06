import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [todovalue, setTodovalue] = useState('')
  function add(newTodos) {
    const news = [newTodos, ...todos]
    persist(news)
    setTodos(news)
  }

  function persist(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function bang(index) {
    const news = todos.filter((el, i) => i !== index)
    persist(news)
    setTodos(news)
  }

  function edit(index) {
    const val = todos[index]
    setTodovalue(val)
    bang(index)
  }

  useEffect(() => {
    if(!localStorage) {
      return
    }

    let localtodos = localStorage.getItem('todos')
    if(!localtodos) {
      return
    }
    localtodos = JSON.parse(localtodos).todos
    setTodos(localtodos)
  }, [])

  return (
    <main>
      <TodoInput add={add} todoValue={todovalue} setTodovalue={setTodovalue}/>
      <TodoList todos={todos} bang={bang} edit={edit}/>
    </main>
  )
}

export default App
