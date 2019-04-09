import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../utils'
import { move } from '../../../gameLogic/logic'

export const gameReducer = createReducer({}, {
  [types.LOAD_GAME_COMPLETED]: (state, action) => state,
  [types.NEW_GAME_COMPLETED]: (state, action) => action.payload,
  [types.PLAYER_MOVE_COMPLETED]: (state, action) => move(state, 'x', action.payload),
  [types.AI_MOVE_COMPLETED]: (state, action) => action.payload,
  [types.CHECK_MOVE_COMPLETED]: (state, action) => action.payload
})

export default combineReducers({ state: gameReducer })
