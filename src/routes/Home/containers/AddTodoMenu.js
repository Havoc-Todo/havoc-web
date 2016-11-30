import { connect } from 'react-redux'
import TodoMenuContainer from './TodoMenuContainer'
import { fetchAddTodoIfNeeded } from '../actions/addTodo'
import { clearTodoMenu } from '../actions/TodoMenu'
import { changeView } from '../actions'
import { fetchTodoListIfNeeded } from '../actions/todoList'
import { generateTodo } from '../helpers'

const mapStateToProps = (state) => {
  return {
    todoMenu: state.todoApp.todoMenu,
    submitText: 'Create Todo',
    cancelText: 'Cancel Create Todo',
    userId: state.user.data.emailAddresses[0].value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (todo) => {
      dispatch(fetchAddTodoIfNeeded(todo))
        .then(() => {
          dispatch(clearTodoMenu())
          dispatch(fetchTodoListIfNeeded())
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

const AddTodoMenu = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TodoMenuContainer)

export default AddTodoMenu
