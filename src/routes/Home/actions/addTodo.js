import fetch from 'isomorphic-fetch'
import moment from 'moment'

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_ADD_TODO = 'REQUEST_ADD_TODO'
export const RECEIVE_ADD_TODO = 'RECEIVE_ADD_TODO'
export const FAILURE_ADD_TODO = 'FAILURE_ADD_TODO'

// ------------------------------------
// Actions
// ------------------------------------
const requestAddTodo = (user) => {
  return {
    type: REQUEST_ADD_TODO,
    user
  }
}

const receiveAddTodo = (task) => {
  return {
    type: RECEIVE_ADD_TODO,
    task
  }
}

const failureAddTodo = (error) => {
  return {
    type: FAILURE_ADD_TODO,
    error
  }
}

const fetchAddTodo = (todo) => {
  return (dispatch) => {
    dispatch(requestAddTodo(todo))

    const url = `http://ec2-54-158-62-69.compute-1.amazonaws.com:3000/api/task/create/`
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
        dispatch(receiveAddTodo(json.doc))
      })
      .then(() => {
        console.log('todo is', todo)
        console.log('gapi is', window.gapi)
        if (todo.addToGCalendar === true) {
          const event = {
            'summary': todo.name,
            'description': todo.description,
            'start': {
              'dateTime': moment(new Date(todo.dateDue)).format('YYYY-MM-DD[T]HH:mm:ssZ'),
              'timeZone': 'America/Los_Angeles'
            },
            'end': {
              'dateTime': moment(new Date(todo.dateDue + 1800000)).format('YYYY-MM-DD[T]HH:mm:ssZ'),
              'timeZone': 'America/Los_Angeles'
            }
          }
          console.log(todo.date)
          console.log(event.start)
          window.gapi.client.load('calendar', 'v3', () => {
            console.log('initialized calendar')
            const request = window.gapi.client.calendar.events.insert({
              'calendarId': 'primary',
              'resource': event
            })
            console.log('request is ', request)
            request.execute((event) => {
              console.log('Event created: ' + event.htmlLink)
            })
          })
        }
      })
      .catch((error) => {
        dispatch(failureAddTodo(error))
      })
  }
}

const shouldFetchAddTodo = (state, todo) => {
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

export const fetchAddTodoIfNeeded = (todo) => {
  return (dispatch, getState) => {
    if (shouldFetchAddTodo(getState(), todo)) {
      return dispatch(fetchAddTodo(todo))
    } else {
      return Promise.resolve()
    }
  }
}
