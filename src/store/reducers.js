import { combineReducers } from 'redux'
import locationReducer from './location'
import todoApp from '../routes/Home/reducers'
import user from '../components/LoginButton/reducers'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    user,
    location: locationReducer,
    todoApp,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
