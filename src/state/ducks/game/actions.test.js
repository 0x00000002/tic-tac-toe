'use strict'
import * as actions from './actions'
import * as types from './types'

describe('cart actions', function () {
  it('should export functions', function () {
    expect(Object.keys(actions)).toEqual([
      'newGame',
      'move',
      'playerMove',
      'wrongMove',
      'aiMove',
      'winner'
    ])
  })

  describe('newGame', function () {
    it('newGame() should return NEW_GAME action', function () {
      expect(actions.newGame()).toEqual({
        type: types.NEW_GAME,
        meta: {
          async: true,
          blocking: false
        }
      })
    })
  })
})
