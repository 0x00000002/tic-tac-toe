import * as types from './types'
import { checkMove } from '../../../gameLogic/logic'

const x = 'x'
const o = 'o'

export const loadGame = () =>  ({
  type: types.LOAD_GAME_COMPLETED,
  meta: { async: true, blocking: false }
})

export const move = (idx) => async (dispatch, getState) => {
  dispatch(playerMove(idx))
  const gameOver = checkMove(getState().game.state, x)
  dispatch(gameOver ? loadGame() : moveChecked(x))
  gameOver && setTimeout(function () { dispatch(loadGame()) }, 800)
  dispatch(aiMove(idx + 1))
  const gameOver1 = checkMove(getState().game.state, o)
  dispatch(gameOver1 ? loadGame() : moveChecked(o))
}

export const moveAI = (idx) => async (dispatch, getState) => {
  dispatch(aiMove(idx))
  const gameOver = checkMove(getState().game.state, o)
  dispatch(gameOver ? loadGame() : moveChecked(o))
}

export const moveChecked = (player) => ({
  type: types.CHECK_MOVE_COMPLETED,
  payload: player
})

export const playerMove = (idx) => ({
  type: types.PLAYER_MOVE_COMPLETED,
  payload: idx
})

export const aiMove = (idx) => ({
  type: types.AI_MOVE_COMPLETED,
  payload: idx
})
