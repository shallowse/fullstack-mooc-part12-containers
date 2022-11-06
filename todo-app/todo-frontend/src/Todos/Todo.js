import React from 'react'

const Todo = ({ todo, done }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
      <span>
        {todo.text}
      </span>
        {done}
    </div>
  )
}

export default Todo
