'use strict'
import * as actions from './actions'
import * as types from './types'

describe('cart actions', function () {
  it('should export functions', function () {
    expect(Object.keys(actions)).toEqual([
      'loadGame',
      'startLoadGame',
      'loadGameComplete',
      'playerMoveComplete',
      'move',
      'moveChecked'
    ])
  })

  describe('playerMoveComplete', function () {
    it('should return an PLAYER_MOVE_COMPLETED action', function () {
      expect(actions.playerMoveComplete(100)).toEqual({
        type: types.PLAYER_MOVE_COMPLETED,
        payload: 100
      })
    })
  })

  describe('loadGame', function () {
    it('startLoadGame() should return LOAD_GAME action', function () {
      expect(actions.startLoadGame()).toEqual({
        type: types.LOAD_GAME,
        meta: {
          async: true,
          blocking: false
        }
      })
    })

    it('loadGameComplete() should return LOAD_GAME_COMPLETED action', function () {
      expect(actions.loadGameComplete()).toEqual({
        type: types.LOAD_GAME_COMPLETED,
        meta: {
          async: true,
          blocking: false
        },
        payload: [null, null, null, null, null, null, null, null, null]
      })
    })
  })
})
