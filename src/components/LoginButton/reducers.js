import { combineReducers } from 'redux'
import { LOGIN, LOGOUT, LOAD_USER_DATA } from './actions'

const data = (state = null, action) => {
  switch (action.type) {
    case LOAD_USER_DATA:
      return action.data
    case LOGOUT:
      return null
    default:
      return state
  }
}

const loggedIn = (state = false, action) => {
  switch (action.type) {
    case LOGIN:
      return true
    case LOGOUT:
      return false
    default:
      return state
  }
}

const user = combineReducers({
  loggedIn,
  data
})

export default user
