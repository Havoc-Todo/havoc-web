import fetch from 'isomorphic-fetch'

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_TODOLIST = 'REQUEST_TODOLIST'
export const RECEIVE_TODOLIST = 'RECEIVE_TODOLIST'
export const FAILURE_TODOLIST = 'FAILURE_TODOLIST'

// ------------------------------------
// Actions
// ------------------------------------
const requestTodoList = (user) => {
  return {
    type: REQUEST_TODOLIST,
    user
  }
}

const receiveTodoList = (task) => {
  return {
    type: RECEIVE_TODOLIST,
    task
  }
}

const failureTodoList = (error) => {
  return {
    type: FAILURE_TODOLIST,
    error
  }
}

const fetchTodoList = (user) => {
  return (dispatch) => {
    dispatch(requestTodoList(user))
    return fetch(`http://ec2-54-158-62-69.compute-1.amazonaws.com:3000/api/task/read/${user}`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveTodoList(json.doc))
      })
      .catch((error) => {
        dispatch(failureTodoList(error))
      })
  }
}

const shouldFetchTodoList = (state, user) => {
  return state.user.loggedIn && state.user.data != null
  // const tasks = state.todoApp.tasks
  // if (!tasks) {
  //   return true
  // } else if (posts.isFetching) {
  //   return false
  // } else {
  //   return posts.didInvalidate
  // }
}

export const fetchTodoListIfNeeded = (user) => {
  return (dispatch, getState) => {
    if (shouldFetchTodoList(getState(), user)) {
      return dispatch(fetchTodoList(user))
    } else {
      return Promise.resolve()
    }
  }
}
