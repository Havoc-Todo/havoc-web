import { UPDATE_FIELD_TODO_MENU, CLEAR_TODO_MENU, LOAD_TODO_MENU } from '../actions/TodoMenu'

// ------------------------------------
// Reducers
// ------------------------------------
const defaultFields = {
  category: 'school',
  name: '',
  description: '',
  priority: 'LOW',
  date: null,
  time: null
}
const addTodoMenu = (state = defaultFields, action) => {
  switch (action.type) {
    case UPDATE_FIELD_TODO_MENU:
      return Object.assign({}, state, {
        [action.key]: action.value
      })
    case CLEAR_TODO_MENU:
      return defaultFields
    case LOAD_TODO_MENU:
      return action.fields
    default:
      return state
  }
}

export default addTodoMenu
