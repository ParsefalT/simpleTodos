
const TodoCard = ({children, keys, bang, edit}) => {
  return (
	<li className="todo">
		{children}
		<button onClick={() => edit(keys)}>edit</button>
		<button onClick={() => bang(keys)}>delete</button>
	</li>
  )
}

export default TodoCard