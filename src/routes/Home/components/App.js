import React, { PropTypes } from 'react'
import TodoListContainer from '../containers/TodoListContainer'
import AddTodoButton from './AddTodoButton'
import TodoMenuContainer from '../containers/TodoMenuContainer'

class App extends React.Component {

  componentDidMount () {
    this.props.fetchTodoListIfNeeded('57a7bd24-ddf0-5c24-9091-ba331e486dc7')
  }

  renderTodoList () {
    return (
      <div>
        <TodoListContainer />
        <AddTodoButton />
      </div>
    )
  }

  renderAddTodo () {
    return <TodoMenuContainer />
  }

  render () {
    const { view } = this.props

    switch (view) {
      case 'VIEW_TODO_LIST':
        return this.renderTodoList()
      case 'VIEW_ADD_TODO':
        return this.renderAddTodo()
      default:
        return <div>{'Invalid View'}</div>
    }
  }
}

App.propTypes = {
  view: PropTypes.string.isRequired,
  fetchTodoListIfNeeded: PropTypes.func.isRequired
}

export default App
