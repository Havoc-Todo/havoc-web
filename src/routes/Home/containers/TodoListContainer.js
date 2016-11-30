import { connect } from 'react-redux'
import { fetchTodoListIfNeeded } from '../actions/todoList'
import TodoList from '../components/TodoList'
import { fetchDeleteTodoIfNeeded } from '../actions/TodoMenu'

const mapStateToProps = (state) => {
  return {
    todos: state.todoApp.todos
      .filter((() => {
        switch (state.todoApp.controls.filter) {
          case 'incomplete': return todo => todo.status === 'INCOMPLETE'
          case 'complete': return todo => todo.status === 'DONE'
          case 'all': return todo => true
          default: return todo => true
        }
      })())
      .concat() // sort is in-place, so make a new copy with concat()
      .sort((a, b) => { // hardcoded to sort by priority
        const value = {
          NONE: 0,
          LOW: 1,
          MEDIUM: 2,
          HIGH: 3
        }
        return value[b.priority] - value[a.priority]
      })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: () => {

    },
    deleteTodo: (id) => {
      dispatch(fetchDeleteTodoIfNeeded(id))
        .then(() => {
          dispatch(fetchTodoListIfNeeded())
          .then(() => {})
        })
    }
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer
