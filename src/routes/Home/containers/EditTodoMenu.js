import { connect } from 'react-redux'
import TodoMenuContainer from './TodoMenuContainer'
import { fetchAddTodoIfNeeded } from '../actions/addTodo'
import { clearTodoMenu } from '../actions/TodoMenu'
import { changeView } from '../actions'
import { fetchTodoListIfNeeded } from '../actions/todoList'

const mapStateToProps = (state) => {
  return {
    todoMenu: state.todoApp.todoMenu,
    submitText: 'Edit Todo',
    cancelText: 'Cancel Edit Todo'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (todo) => {
      dispatch(fetchAddTodoIfNeeded(todo))
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

const generateTodo = (todoMenuFields) => {
  const { name, description, category, priority } = todoMenuFields
  return {
    name,
    description,
    category,
    priority,
    dateDue: 1477291500000,
    user: '57a7bd24-ddf0-5c24-9091-ba331e486dc7',
    subtasks: [],
    status: 'INCOMPLETE'
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, stateProps, dispatchProps, ownProps, {
    handleSubmit: () => {
      dispatchProps.handleSubmit(generateTodo(stateProps.todoMenu))
    }
  })
}

const EditTodoMenu = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TodoMenuContainer)

export default EditTodoMenu
