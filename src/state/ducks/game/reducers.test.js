'use strict'

import { createReducer } from '../../utils'
import newReducer from './reducers'
import fake from '../../../helpers/testing'
import { emptyState } from '../../utils/localStorage'

jest.mock('redux', () => ({
  combineReducers: jest
    .fn()
    .mockReturnValue({ reducer: 'fake-combined-reducer' })
}))
jest.mock('../../utils', () => ({
  createReducer: jest.fn().mockReturnValue('fake-reducer')
}))

describe('game reducers', function () {
  describe('gameReducer', function () {
    it('should call createReducer with correct args', function () {
      expect(newReducer).toEqual({ reducer: 'fake-combined-reducer' })
      expect(createReducer.mock.calls[0][0]).toEqual({})
      expect(Object.keys(createReducer.mock.calls[0][1])).toEqual([
        'NEW_GAME',
        'PLAYER_MOVE',
        'AI_MOVE',
        'WRONG_MOVE',
        'HAS_WINNER'
      ])
    })

    it('should support NEW_GAME', function () {
      expect(
        createReducer.mock.calls[0][1]['NEW_GAME']({}, {
          payload: fake.payload
        })
      ).toEqual(emptyState.game.data)
    })
  })
})
