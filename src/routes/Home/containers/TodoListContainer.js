import { connect } from 'react-redux'
import { fetchTodoListIfNeeded } from '../actions/todoList'
import TodoList from '../components/TodoList'
import { fetchDeleteTodoIfNeeded } from '../actions/TodoMenu'

const mapStateToProps = (state) => {
  return {
    todos: state.todoApp.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: () => {

    },
    deleteTodo: (id) => {
      dispatch(fetchDeleteTodoIfNeeded(id))
        .then(() => {
          dispatch(fetchTodoListIfNeeded())
          .then(() => {})
        })
    }
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer
