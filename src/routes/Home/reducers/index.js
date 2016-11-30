import { combineReducers } from 'redux'
import { CHANGE_VIEW } from '../actions'
import { RECEIVE_TODOLIST } from '../actions/todoList'
import { SET_TODOLIST_SORT, SET_TODOLIST_FILTER } from '../actions/todoListControls'
import todoMenu from './TodoMenu'

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

const sortControl = (state = 'priority', action) => {
  switch (action.type) {
    case SET_TODOLIST_SORT:
      return action.value
    default:
      return state
  }
}

const filterControl = (state = 'incomplete', action) => {
  switch (action.type) {
    case SET_TODOLIST_FILTER:
      return action.value
    default:
      return state
  }
}

const controls = combineReducers({
  sort: sortControl,
  filter: filterControl
})

const todoApp = combineReducers({
  view,
  todos,
  controls,
  todoMenu
})

export default todoApp
