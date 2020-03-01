import React from 'react'
import ReactDOM from 'react-dom'
import './assets/index.css'
import { Provider as ReduxProvider } from 'react-redux'
import App from './containers/App'
import configureStore from './state/store'
import * as serviceWorker from './helpers/serviceWorker'
import { saveState, loadState, clearState } from './state/utils/localStorage'

clearState()

const persistedState = loadState()
const reduxStore = configureStore(persistedState)
const { dispatch } = reduxStore
reduxStore.subscribe(() => saveState(reduxStore.getState()))

ReactDOM.render(
  <ReduxProvider store={reduxStore}>
    <App dispatch={dispatch} />
  </ReduxProvider>,
  document.getElementById('app')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
