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
const requestTodoList = (userId) => {
  return {
    type: REQUEST_TODOLIST,
    userId
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

const fetchTodoList = (userId) => {
  return (dispatch) => {
    dispatch(requestTodoList(userId))
    return fetch(`http://ec2-54-158-62-69.compute-1.amazonaws.com:3000/api/task/read/${userId}`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveTodoList(json.doc))
      })
      .catch((error) => {
        dispatch(failureTodoList(error))
      })
  }
}

const shouldFetchTodoList = (user) => {
  return user.loggedIn && user.data != null
  // const tasks = state.todoApp.tasks
  // if (!tasks) {
  //   return true
  // } else if (posts.isFetching) {
  //   return false
  // } else {
  //   return posts.didInvalidate
  // }
}

export const fetchTodoListIfNeeded = () => {
  return (dispatch, getState) => {
    const user = getState().user
    if (shouldFetchTodoList(user)) {
      return dispatch(fetchTodoList(user.data.emailAddresses[0].value))
    } else {
      return Promise.resolve()
    }
  }
}
