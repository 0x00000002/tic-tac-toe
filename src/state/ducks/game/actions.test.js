'use strict'
import * as actions from './actions'
import * as types from './types'

describe('cart actions', function () {
  it('should export functions', function () {
    expect(Object.keys(actions)).toEqual([
      'loadGame',
      'move',
      'moveAI',
      'moveChecked',
      'playerMove',
      'aiMove'
    ])
  })

  describe('loadGame', function () {
    it('startLoadGame() should return LOAD_GAME action', function () {
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
