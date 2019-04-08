import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../utils'

export const gameReducer = createReducer({}, {
  [types.NEW_GAME_COMPLETED]: (state, action) => action.payload,
  [types.PLAYER_MOVE_COMPLETED]: (state, action) => action.payload,
  [types.AI_MOVE_COMPLETED]: (state, action) => action.payload,
  [types.CHECK_MOVE_COMPLETED]: (state, action) => action.payload
})

export default combineReducers({ new: gameReducer })
