import * as types from './types'

export const loadGame = () => ({
  type: types.LOAD_GAME_COMPLETED,
  meta: {
    async: true,
    blocking: false
  }
})

export const move = (idx) => ({
  type: types.PLAYER_MOVE_COMPLETED,
  payload: idx
})

// export const move = (idx) => async dispatch => {
//   dispatch({
//     type: types.PLAYER_MOVE,
//     meta: {
//       async: true,
//       blocking: false
//     }
//   })
//
//   dispatch({
//     type: types.LOAD_GAME_COMPLETED,
//     meta: {
//       async: true
//     },
//     payload: newState
//   })
// }