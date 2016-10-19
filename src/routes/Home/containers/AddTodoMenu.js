import { connect } from 'react-redux'
import TodoMenuContainer from './TodoMenuContainer'
import { fetchAddTodoIfNeeded } from '../actions/addTodo'
import { clearTodoMenu } from '../actions/TodoMenu'
import { changeView } from '../actions'
import { fetchTodoListIfNeeded } from '../actions/todoList'

const mapStateToProps = (state) => {
  return {
    todoMenu: state.todoApp.todoMenu,
    submitText: 'Create Todo',
    cancelText: 'Cancel Create Todo'
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
  const { name, description, category, priority, date, time } = todoMenuFields

  const unixTime = (date && time)
    ? (new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        time.getHours(),
        time.getMinutes(),
        time.getSeconds(),
        time.getMilliseconds()
      )).getTime()
    : null

  return {
    name,
    description,
    category,
    priority,
    dateDue: unixTime,
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

const AddTodoMenu = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TodoMenuContainer)

export default AddTodoMenu
