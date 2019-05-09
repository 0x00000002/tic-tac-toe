import * as types from './types'
import { createReducer } from '../utils'
import emptyState from '../emptyState'

export const game = createReducer(emptyState, {
  [types.NEW_GAME_COMPLETED]: () => ({ data: emptyState.game.data }),
  [types.PLAYER_MOVE]: (state, action) => action.payload,
  [types.AI_MOVE]: (state, action) => action.payload,
  [types.HAS_WINNER]: (state, action) => action.payload
})

export default game
