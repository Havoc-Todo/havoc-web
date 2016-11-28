// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN = 'LOG_IN'
export const LOGOUT = 'LOG_OUT'

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
