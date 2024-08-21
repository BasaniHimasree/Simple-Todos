const TodoItem = props => {
  const {eachItem, deleteUser} = props
  const {title, id} = eachItem
  const onClickButton = () => {
    deleteUser(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={onClickButton}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
