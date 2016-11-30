import { connect } from 'react-redux'
import { changeView } from '../actions'
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
    }
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, stateProps, dispatchProps, ownProps, {
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
    },
    handleToggleChange: (event, toggle) => {
      dispatchProps.updateField('addToGCalendar', toggle)
    }
  })
}

const TodoMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TodoMenu)

export default TodoMenuContainer
