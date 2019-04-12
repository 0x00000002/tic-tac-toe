import * as types from './types'
import { checkMove } from '../../../gameLogic/logic'

const x = 'x'
const o = 'o'

export const newGame = () => ({
  type: types.NEW_GAME,
  meta: { async: true, blocking: false }
})

export const move = (idx, player) => async (dispatch, getState) => {
  const { state } = getState().game.data
  const isAllowed = !state[idx]

  if (isAllowed) {
    dispatch(playerMove(idx, player))
    const playerWon = checkMove(getState().game.data.state, x)
    playerWon && dispatch(winner(x))
    !playerWon && dispatch(aiMove())
    const aiWon = checkMove(getState().game.data.state, o)
    aiWon && dispatch(winner(o))
  } else {
    dispatch(wrongMove(idx, x))
  }
}

export const playerMove = (idx = 4, player = x) => ({
  type: types.PLAYER_MOVE,
  payload: { idx, player }
})

export const wrongMove = (idx = 4, player = x) => ({
  type: types.WRONG_MOVE,
  payload: { idx, player }
})

export const aiMove = () => ({
  type: types.AI_MOVE
})

export const winner = (player) => async (dispatch, getState) => {
  const { state } = getState().game.data
  dispatch({
    type: types.HAS_WINNER,
    meta: { async: false, blocking: false },
    payload: {
      state,
      winner: player
    }
  })
}
