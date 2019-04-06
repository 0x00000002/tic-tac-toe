import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../utils'

export const newReducer = createReducer({}, {
  [types.NEW_COMPLETED]: (state, action) => action.payload
})

export default combineReducers({ new: newReducer })
