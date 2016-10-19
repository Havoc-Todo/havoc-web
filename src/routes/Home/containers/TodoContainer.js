import { connect } from 'react-redux'
import { changeView } from '../actions'
import { loadTodoMenu } from '../actions/TodoMenu'
import { fetchTodoListIfNeeded } from '../actions/todoList'
import { fetchDeleteTodoIfNeeded } from '../actions/deleteTodo'
import Todo from '../components/Todo'

const getDateTime = (dateDue) => {
  if (dateDue) {
    let date = new Date()
    date.setTime(dateDue)
    return {
      date: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
      time: date
    }
  }
  return {
    date: null,
    time: null
  }
}

const mapStateToProps = (state, ownProps) => {
  const { name, description, category, priority, dateDue } = ownProps
  const { date, time } = getDateTime(dateDue)
  return {
    fields: {
      name,
      description,
      category,
      priority,
      date,
      time
    }
  }
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
      dispatch(loadTodoMenu(fields))
      dispatch(changeView('VIEW_EDIT_TODO'))
    }
  }
}

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

export default TodoContainer
