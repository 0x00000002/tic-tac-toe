'use strict'

import * as types from './types'

describe('user.types', function () {
  it('should export types', function () {
    expect(types).toEqual({
      'CHECK_MOVE': 'CHECK_MOVE',
      'CHECK_MOVE_COMPLETED': 'CHECK_MOVE_COMPLETED',
      'CHECK_MOVE_FAILED': 'CHECK_MOVE_FAILED',
      'MOVE': 'MOVE',
      'MOVE_COMPLETED': 'MOVE_COMPLETED',
      'MOVE_FAILED': 'MOVE_FAILED',
      'NEW_GAME': 'NEW_GAME',
      'NEW_GAME_COMPLETED': 'NEW_GAME_COMPLETED',
      'NEW_GAME_FAILED': 'NEW_GAME_FAILED'
    })
  })
})
