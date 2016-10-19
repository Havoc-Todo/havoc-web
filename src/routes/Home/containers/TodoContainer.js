import { connect } from 'react-redux'
import { fetchTodoListIfNeeded } from '../actions/todoList'
import { fetchDeleteTodoIfNeeded } from '../actions/deleteTodo'
import Todo from '../components/Todo'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => {
      dispatch(fetchDeleteTodoIfNeeded(id))
        .then(() => {
          dispatch(fetchTodoListIfNeeded('57a7bd24-ddf0-5c24-9091-ba331e486dc7'))
          .then(() => {})
        })
    }
  }
}

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

export default TodoContainer
