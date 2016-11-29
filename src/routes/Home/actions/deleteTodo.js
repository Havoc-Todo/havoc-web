import fetch from 'isomorphic-fetch'

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_DELETE_TODO = 'REQUEST_DELETE_TODO'
export const RECEIVE_DELETE_TODO = 'RECEIVE_DELETE_TODO'
export const FAILURE_DELETE_TODO = 'FAILURE_DELETE_TODO'

// ------------------------------------
// Actions
// ------------------------------------
const requestDeleteTodo = (id) => {
  return {
    type: REQUEST_DELETE_TODO,
    id
  }
}

const receiveDeleteTodo = (response) => {
  return {
    type: RECEIVE_DELETE_TODO,
    response
  }
}

const failureDeleteTodo = (error) => {
  return {
    type: FAILURE_DELETE_TODO,
    error
  }
}

const fetchDeleteTodo = (id) => {
  return (dispatch) => {
    dispatch(requestDeleteTodo(id))

    const url = `http://ec2-54-158-62-69.compute-1.amazonaws.com:3000/api/task/delete/${id}`
    let myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const params = {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default'
      // body: JSON.stringify(todo)
    }

    return fetch(url, params)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveDeleteTodo(json))
      })
      .catch((error) => {
        dispatch(failureDeleteTodo(error))
      })
  }
}

const shouldFetchDeleteTodo = (state, todo) => {
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

export const fetchDeleteTodoIfNeeded = (id) => {
  return (dispatch, getState) => {
    if (shouldFetchDeleteTodo(getState(), id)) {
      return dispatch(fetchDeleteTodo(id))
    } else {
      return Promise.resolve()
    }
  }
}
