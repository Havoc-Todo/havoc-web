import { UPDATE_FIELD_TODO_MENU, CLEAR_TODO_MENU, LOAD_TODO_MENU } from '../actions/TodoMenu'

// ------------------------------------
// Reducers
// ------------------------------------

const defaultTime = () => {
  // let time = new Date()
  // const hours = 1
  // time.setTime(Date.now() + hours * 60 * 60 * 1000)
  return {
    date: null,
    time: null
  }
}
const defaultFields = () => {
  const { date, time } = defaultTime()
  return {
    category: 'school',
    name: '',
    description: '',
    priority: 'NONE',
    date,
    time,
    t_id: null,
    subtasks: [],
    status: 'INCOMPLETE',
    addToGCalendar: false
  }
}

const todoMenu = (state = defaultFields(), action) => {
  switch (action.type) {
    case UPDATE_FIELD_TODO_MENU:
      return Object.assign({}, state, {
        [action.key]: action.value
      })
    case CLEAR_TODO_MENU:
      return defaultFields()
    case LOAD_TODO_MENU:
      return Object.assign({}, defaultFields(), action.fields)
    default:
      return state
  }
}

export default todoMenu
