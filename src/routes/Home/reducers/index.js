import { combineReducers } from 'redux'
import { CHANGE_VIEW } from '../actions'
import { RECEIVE_TODOLIST } from '../actions/todoList'
import addTodoMenu from './addTodoMenu'

const view = (state = 'VIEW_TODO_LIST', action) => {
  switch (action.type) {
    case CHANGE_VIEW:
      return action.view
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TODOLIST:
      return action.task
    default:
      return state
  }
}

const todoApp = combineReducers({
  view,
  todos,
  addTodoMenu
})

export default todoApp
