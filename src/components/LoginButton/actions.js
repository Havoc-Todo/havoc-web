// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN = 'LOG_IN'
export const LOGOUT = 'LOG_OUT'
export const LOAD_USER_DATA = 'LOAD_USER_DATA'

// ------------------------------------
// Actions
// ------------------------------------
export const login = (user) => {
  return {
    type: LOGIN,
    user
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const loadUserData = (data) => {
  return {
    type: LOAD_USER_DATA,
    data
  }
}
