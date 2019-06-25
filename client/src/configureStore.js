import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import createRootReducer from './reducers/index'
import thunk from 'redux-thunk';

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    applyMiddleware(thunk),
  )

  return store
}