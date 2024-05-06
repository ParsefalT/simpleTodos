import { useState } from "react"
import TodoCard from "./TodoCard"

const TodoList = ({todos, bang, edit}) => {
 
  return (
    <ol className="ul">
      {todos.map((todo, index) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <TodoCard keys={index} bang={bang} edit={edit}>
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ol>
  )
}

export default TodoList
