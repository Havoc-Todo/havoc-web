// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_FIELD_TODO_MENU = 'UPDATE_FIELD_TODO_MENU'
export const CLEAR_TODO_MENU = 'CLEAR_TODO_MENU'
export const LOAD_TODO_MENU = 'LOAD_TODO_MENU'

// ------------------------------------
// Actions
// ------------------------------------
export const updateFieldTodoMenu = (key, value) => {
  return {
    type: UPDATE_FIELD_TODO_MENU,
    key,
    value
  }
}

export const clearTodoMenu = () => {
  return {
    type: CLEAR_TODO_MENU
  }
}

export const loadTodoMenu = (fields) => {
  return {
    type: LOAD_TODO_MENU,
    fields
  }
}
