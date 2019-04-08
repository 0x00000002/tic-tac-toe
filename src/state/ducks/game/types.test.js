'use strict'

import * as types from './types'

describe('user.types', function () {
  it('should export types', function () {
    expect(types).toEqual({
      'AI_MOVE': 'AI_MOVE',
      'AI_MOVE_COMPLETED': 'AI_MOVE_COMPLETED',
      'AI_MOVE_FAILED': 'AI_MOVE_FAILED',
      'CHECK_MOVE': 'CHECK_MOVE',
      'CHECK_MOVE_COMPLETED': 'CHECK_MOVE_COMPLETED',
      'CHECK_MOVE_FAILED': 'CHECK_MOVE_FAILED',
      'PLAYER_MOVE': 'PLAYER_MOVE',
      'PLAYER_MOVE_COMPLETED': 'PLAYER_MOVE_COMPLETED',
      'PLAYER_MOVE_FAILED': 'PLAYER_MOVE_FAILED',
      'NEW_GAME': 'NEW_GAME',
      'NEW_GAME_COMPLETED': 'NEW_GAME_COMPLETED',
      'NEW_GAME_FAILED': 'NEW_GAME_FAILED'
    })
  })
})
