import { connect } from 'react-redux'
import TodoMenuContainer from './TodoMenuContainer'
import { fetchEditTodoIfNeeded } from '../actions/editTodo'
import { clearTodoMenu } from '../actions/TodoMenu'
import { changeView } from '../actions'
import { fetchTodoListIfNeeded } from '../actions/todoList'
import { generateTodo } from '../helpers'

const mapStateToProps = (state) => {
  return {
    todoMenu: state.todoApp.todoMenu,
    submitText: 'Edit Todo',
    cancelText: 'Cancel Edit Todo',
    userId: state.user.data.emailAddresses[0].value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (todo) => {
      dispatch(fetchEditTodoIfNeeded(todo))
        .then(() => {
          dispatch(clearTodoMenu())
          dispatch(fetchTodoListIfNeeded('57a7bd24-ddf0-5c24-9091-ba331e486dc7'))
          .then(() => {
            dispatch(changeView('VIEW_TODO_LIST'))
          })
          .catch((error) => {
            console.log(error)
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, stateProps, dispatchProps, ownProps, {
    handleSubmit: () => {
      dispatchProps.handleSubmit(generateTodo(stateProps.todoMenu, stateProps.userId))
    }
  })
}

const EditTodoMenu = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TodoMenuContainer)

export default EditTodoMenu
