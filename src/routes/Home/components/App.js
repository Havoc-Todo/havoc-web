import React, { PropTypes } from 'react'
import TodoListContainer from '../containers/TodoListContainer'
import AddTodoButton from './AddTodoButton'
import AddTodoMenu from '../containers/AddTodoMenu'
import EditTodoMenu from '../containers/EditTodoMenu'
import DefaultScreen from './DefaultScreen'

class App extends React.Component {

  componentDidMount () {
    // '57a7bd24-ddf0-5c24-9091-ba331e486dc7'
    this.props.fetchTodoListIfNeeded()
    this.intervalTimer = setInterval(() => {
      this.props.fetchTodoListIfNeeded()
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.intervalTimer)
  }

  render () {
    const { view, validUser } = this.props
    if (!validUser) return <DefaultScreen />
    switch (view) {
      case 'VIEW_TODO_LIST':
        return (
          <div>
            <TodoListContainer />
            <AddTodoButton />
          </div>
        )
      case 'VIEW_ADD_TODO':
        return <AddTodoMenu />
      case 'VIEW_EDIT_TODO':
        return <EditTodoMenu />
      default:
        return <div>{'Invalid View'}</div>
    }
  }
}

App.propTypes = {
  view: PropTypes.string.isRequired,
  validUser: PropTypes.bool.isRequired,
  fetchTodoListIfNeeded: PropTypes.func.isRequired
}

export default App
