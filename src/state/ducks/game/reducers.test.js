'use strict'

import { createReducer } from '../../utils'
import newReducer from './reducers'
import fake from '../../../helpers/testing'

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
        'LOAD_GAME_COMPLETED',
        'NEW_GAME_COMPLETED',
        'PLAYER_MOVE_COMPLETED',
        'AI_MOVE_COMPLETED',
        'CHECK_MOVE_COMPLETED'
      ])
    })

    it('should support PLAYER_MOVE_COMPLETED', function () {
      expect(
        createReducer.mock.calls[0][1]['PLAYER_MOVE_COMPLETED']({}, {
          payload: fake.payload
        })
      ).toEqual({ 'fake-payload': 'x' })
    })
  })
})
