import { connect } from 'react-redux'
import { changeView } from '../actions'
import { fetchTodoListIfNeeded } from '../actions/todoList'
import { fetchAddTodoIfNeeded } from '../actions/addTodo'
import { updateFieldTodoMenu, clearTodoMenu } from '../actions/TodoMenu'
import TodoMenu from '../components/TodoMenu'

const mapStateToProps = (state) => {
  const menu = state.todoApp.todoMenu
  return {
    category: menu.category,
    name: menu.name,
    description: menu.description,
    priority: menu.priority,
    date: menu.date,
    time: menu.time
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCancel: () => {
      dispatch(clearTodoMenu())
      dispatch(changeView('VIEW_TODO_LIST'))
    },
    updateField: (key, value) => {
      dispatch(updateFieldTodoMenu(key, value))
    },
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

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, stateProps, dispatchProps, ownProps, {
    handleSubmit: () => {
      const { name, description, category, priority } = stateProps
      dispatchProps.handleSubmit({
        name,
        description,
        category,
        priority,
        dateDue: 1477291500000,
        user: '57a7bd24-ddf0-5c24-9091-ba331e486dc7',
        subtasks: [],
        status: 'INCOMPLETE'
      })
    },
    handleCategoryChange: (event, index, value) => {
      dispatchProps.updateField('category', value)
    },
    handlePriorityChange: (event, index, value) => {
      dispatchProps.updateField('priority', value)
    },
    handleNameChange: (event) => {
      dispatchProps.updateField('name', event.target.value)
    },
    handleDescriptionChange: (event) => {
      dispatchProps.updateField('description', event.target.value)
    },
    handleDateChange: (event, date) => {
      dispatchProps.updateField('date', date)
    },
    handleTimeChange: (event, time) => {
      dispatchProps.updateField('time', time)
    }
  })
}

const TodoMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TodoMenu)

export default TodoMenuContainer
