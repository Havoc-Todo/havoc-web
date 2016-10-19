import { connect } from 'react-redux'
import { changeView } from '../actions'
import { loadTodoMenu } from '../actions/TodoMenu'
import { fetchTodoListIfNeeded } from '../actions/todoList'
import { fetchDeleteTodoIfNeeded } from '../actions/deleteTodo'
import Todo from '../components/Todo'

const mapStateToProps = (state, ownProps) => {
  return { ...ownProps.todo }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => {
      dispatch(fetchDeleteTodoIfNeeded(id))
        .then(() => {
          dispatch(fetchTodoListIfNeeded('57a7bd24-ddf0-5c24-9091-ba331e486dc7'))
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
