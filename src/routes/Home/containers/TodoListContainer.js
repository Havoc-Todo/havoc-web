import { connect } from 'react-redux'
import { fetchTodoListIfNeeded } from '../actions/todoList'
import TodoList from '../components/TodoList'
import { fetchDeleteTodoIfNeeded } from '../actions/addTodoMenu'

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
          dispatch(fetchTodoListIfNeeded('57a7bd24-ddf0-5c24-9091-ba331e486dc7'))
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
