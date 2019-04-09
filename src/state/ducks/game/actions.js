import * as types from './types'
import { emptyState } from '../../utils/localStorage'
import { checkMove } from '../../../gameLogic/logic'

export const loadGame = () => async dispatch => {
  dispatch(startLoadGame())
  dispatch(loadGameComplete())
}

export const startLoadGame = () => ({
  type: types.LOAD_GAME,
  meta: { async: true, blocking: false },
})

export const loadGameComplete = () => ({
  type: types.LOAD_GAME_COMPLETED,
  meta: { async: true, blocking: false },
  payload: emptyState.game.state
})

export const playerMoveComplete = (idx) => ({
  type: types.PLAYER_MOVE_COMPLETED,
  payload: idx
})

export const move = (idx) => async (dispatch, getState) => {
  dispatch(playerMoveComplete(idx))

  const hasWon = checkMove(getState().game.state)

  hasWon && dispatch(startLoadGame())
  hasWon && setTimeout(function() { dispatch(loadGameComplete()) }, 800)
  !hasWon && dispatch(moveChecked())
}

export const moveChecked = () => ({
  type: types.CHECK_MOVE_COMPLETED,
})


