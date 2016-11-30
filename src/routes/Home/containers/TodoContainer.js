import { connect } from 'react-redux'
import { changeView } from '../actions'
import { loadTodoMenu } from '../actions/TodoMenu'
import { fetchTodoListIfNeeded } from '../actions/todoList'
import { fetchDeleteTodoIfNeeded } from '../actions/deleteTodo'
import { fetchEditTodoIfNeeded } from '../actions/editTodo'
import Todo from '../components/Todo'

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps.todo,
    todo: ownProps.todo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    completeTodo: (todo) => {
      dispatch(fetchEditTodoIfNeeded(todo))
        .then(() => {
          dispatch(fetchTodoListIfNeeded())
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deleteTodo: (id) => {
      dispatch(fetchDeleteTodoIfNeeded(id))
        .then(() => {
          dispatch(fetchTodoListIfNeeded())
          .then(() => {})
        })
    },
    handleEdit: (fields) => {
      // BUG!!! changeView must come before loadTodo
      dispatch(changeView('VIEW_EDIT_TODO'))
      dispatch(loadTodoMenu(fields))
    }
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, stateProps, dispatchProps, ownProps, {
    completeTodo: () => {
      const updatedTodo = Object.assign({}, stateProps.todo, {
        status: 'DONE'
      })
      dispatchProps.completeTodo(updatedTodo)
    },
    handleEdit: () => {
      dispatchProps.handleEdit(ownProps.todo)
    }
  })
}

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Todo)

export default TodoContainer
