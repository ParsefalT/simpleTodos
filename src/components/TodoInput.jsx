const TodoInput = ({add, todoValue, setTodovalue}) => {

  function gang(event) {
    setTodovalue(event.target.value)

  }

  return (
    <div>
      <header>
        <input value={todoValue} onChange={(event) => gang(event)} type="text" placeholder="enter here..." />
        <button onClick={() => {
          add(todoValue)
          setTodovalue('')  
        }}>add</button>
      </header>
    </div>
  )
}

export default TodoInput
