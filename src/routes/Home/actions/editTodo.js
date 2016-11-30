import fetch from 'isomorphic-fetch'

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_EDIT_TODO = 'REQUEST_EDIT_TODO'
export const RECEIVE_EDIT_TODO = 'RECEIVE_EDIT_TODO'
export const FAILURE_EDIT_TODO = 'FAILURE_EDIT_TODO'

// ------------------------------------
// Actions
// ------------------------------------
const requestEditTodo = (user) => {
  return {
    type: REQUEST_EDIT_TODO,
    user
  }
}

const receiveEditTodo = (task) => {
  return {
    type: RECEIVE_EDIT_TODO,
    task
  }
}

const failureEditTodo = (error) => {
  return {
    type: FAILURE_EDIT_TODO,
    error
  }
}

const fetchEditTodo = (todo) => {
  return (dispatch) => {
    dispatch(requestEditTodo(todo))

    const url = `http://ec2-54-158-62-69.compute-1.amazonaws.com:3000/api/task/update/`
    let myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const params = {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(todo)
    }

    return fetch(url, params)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveEditTodo(json.doc))
      })
      .catch((error) => {
        dispatch(failureEditTodo(error))
      })
  }
}

const shouldFetchEditTodo = (state, todo) => {
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

export const fetchEditTodoIfNeeded = (todo) => {
  return (dispatch, getState) => {
    if (shouldFetchEditTodo(getState(), todo)) {
      return dispatch(fetchEditTodo(todo))
    } else {
      return Promise.resolve()
    }
  }
}
