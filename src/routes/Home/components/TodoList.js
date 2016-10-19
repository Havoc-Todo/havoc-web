import React, { PropTypes } from 'react'
import { List } from 'material-ui/List'
import TodoContainer from '../containers/TodoContainer'

const TodoList = ({
  todos, onTodoClick
}) => (
  <List>
    {todos.map(todo =>
      <TodoContainer
        key={todo.t_id}
        {...todo}
        onClick={() => onTodoClick(todo.t_id)}
      />
    )}
  </List>
)

TodoList.propTypes = {
  todos: PropTypes.any,
  // todos: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   completed: PropTypes.bool.isRequired,
  //   text: PropTypes.string.isRequired
  // }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
