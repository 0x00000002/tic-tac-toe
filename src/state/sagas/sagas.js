import { select, call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import * as types from './types'
import { checkMove, aiMove, playerMove } from '../../gameLogic/logic'
import { PLAYER_MOVE_COMPLETED } from './types'

const x = 'x'
const o = 'o'

function * gameSaga () {
  yield takeEvery(types.NEW_GAME_REQUEST, newGame())
  yield takeLatest(types.NEW_MOVE, move())
  yield takeLatest(types.PLAYER_MOVE, checkThisMove(x))
  yield takeLatest(types.AI_MOVE, checkThisMove(o))
  yield takeLatest(types.CHECKING_MOVE_COMPLETED, endMove())
  yield takeLatest(PLAYER_MOVE_COMPLETED, aiTurn())
}

export const newGame = () => function * () {
  yield put({
    type: types.NEW_GAME_COMPLETED,
    meta: { async: true, blocking: true }
  })
}

const wrongMove = function * () {
  yield put({ type: types.WRONG_MOVE })
}

export const move = () => function * (action) {
  const { idx, player } = action.payload
  const { game: { data } } = yield select()
  if (data.state[idx] === null) {
    const newState = playerMove(idx, player, data.state)
    yield put({
      type: types.PLAYER_MOVE,
      meta: { async: true, blocking: false },
      payload: {
        data: {
          ...data,
          state: newState
        }
      }
    })
  } else {
    yield call(wrongMove)
  }
}

const aiTurn = () => function * () {
  yield put({
    type: types.AI_TURN
  })
  const { game: { data } } = yield select()
  const newState = aiMove(data.state)
  yield put({
    type: types.AI_MOVE,
    meta: { async: true, blocking: false },
    payload: {
      data: {
        ...data,
        state: newState
      }
    }
  })
}

const checkThisMove = (player = x) => function * checkThisMove () {
  yield put({
    type: types.CHECKING_MOVE,
    meta: { async: true, blocking: false }
  })
  const { game: { data } } = yield select()
  if (checkMove(data.state, player)) {
    yield put({
      type: types.HAS_WINNER,
      meta: { async: true, blocking: false },
      payload: {
        data: {
          ...data,
          winner: player
        }
      }
    })
  } else {
    yield put({
      type: types.NO_LUCK,
      meta: { async: true, blocking: false },
    })
    yield put({
      type: types.CHECKING_MOVE_COMPLETED,
      meta: { async: true, blocking: false },
      payload: {
        data,
        player
      }
    })
  }
}

const endMove = () => function * checkThisMove (action) {
  yield action.payload.player === x ? put({
    type: types.PLAYER_MOVE_COMPLETED,
    meta: { async: true, blocking: false }
  }) : put({
    type: types.AI_MOVE_COMPLETED,
    meta: { async: true, blocking: false }
  })
}

export default gameSaga
