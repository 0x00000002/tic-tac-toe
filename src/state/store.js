import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import * as reducers from './sagas/reducers'
import { createLogger } from './middlewares'
import createSagaMiddleware from 'redux-saga'
import saga from './sagas/sagas'

export default function configureStore (initialState) {
  const rootReducer = combineReducers(reducers)
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
        createLogger(true)
      )
    )
  )

  sagaMiddleware.run(saga)
  return store
}
