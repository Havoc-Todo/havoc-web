// ------------------------------------
// Constants
// ------------------------------------
export const SET_TODOLIST_SORT = 'SET_TODOLIST_SORT'
export const SET_TODOLIST_FILTER = 'SET_TODOLIST_FILTER'

// ------------------------------------
// Actions
// ------------------------------------
export const setTodoListSort = (value) => {
  return {
    type: SET_TODOLIST_SORT,
    value
  }
}
export const setTodoListFilter = (value) => {
  return {
    type: SET_TODOLIST_FILTER,
    value
  }
}
