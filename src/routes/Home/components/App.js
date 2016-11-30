import React, { PropTypes } from 'react'
import TodoListContainer from '../containers/TodoListContainer'
import AddTodoButton from './AddTodoButton'
import AddTodoMenu from '../containers/AddTodoMenu'
import EditTodoMenu from '../containers/EditTodoMenu'
import DefaultScreen from './DefaultScreen'
import RateLimitScreen from './RateLimitScreen'

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
    const { view, user } = this.props
    if (!user.loggedIn) return <DefaultScreen />
    if (user.data === null) return <RateLimitScreen />
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
  user: PropTypes.any,
  fetchTodoListIfNeeded: PropTypes.func.isRequired
}

export default App
