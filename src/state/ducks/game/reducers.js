import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../utils'

export const gameReducer = createReducer({}, {
  [types.MOVE_COMPLETED]: (state, action) => action.payload
})

export default combineReducers({ new: gameReducer })
