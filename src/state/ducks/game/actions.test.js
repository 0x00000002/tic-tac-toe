'use strict'
import * as actions from './actions'
import * as types from './types'

describe('cart actions', function () {
  it('should export functions', function () {
    expect(Object.keys(actions)).toEqual([
      'loadGame', 'move'
    ])
  })

  describe('move', function () {
    it('should return an PLAYER_MOVE_COMPLETED action', function () {
      expect(actions.move(100)).toEqual({
        type: types.PLAYER_MOVE_COMPLETED,
        payload: 100
      })
    })
  })

  describe('loadGame', function () {
    it('should return an LOAD_GAME_COMPLETED action', function () {
      expect(actions.loadGame()).toEqual({
        type: types.LOAD_GAME_COMPLETED,
        meta: {
          async: true,
          blocking: false
        }
      })
    })
  })
})
