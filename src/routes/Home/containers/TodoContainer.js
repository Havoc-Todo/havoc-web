import { connect } from 'react-redux'
import { changeView } from '../actions'
import { loadTodoMenu } from '../actions/TodoMenu'
import { fetchTodoListIfNeeded } from '../actions/todoList'
import { fetchDeleteTodoIfNeeded } from '../actions/deleteTodo'
import Todo from '../components/Todo'

const mapStateToProps = (state, ownProps) => {
  const { name, description, category, priority, date, time } = ownProps
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
      dispatch(changeView('VIEW_ADD_TODO'))
    }
  }
}

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

export default TodoContainer
