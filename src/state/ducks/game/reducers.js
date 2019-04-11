import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../utils'
import { move, aiMove } from '../../../gameLogic/logic'
import { emptyState } from '../../utils/localStorage'

export const gameReducer = createReducer({}, {
  [types.NEW_GAME]: (state, action) => emptyState.game.data,
  [types.PLAYER_MOVE]: (state, action) => move(state, action.payload.player, action.payload.idx),
  [types.AI_MOVE]: (state, action) => aiMove(state),
  [types.WRONG_MOVE]: (state, action) => state,
  [types.HAS_WINNER]: (state, action) => action.payload
})

export default combineReducers({ data: gameReducer })
