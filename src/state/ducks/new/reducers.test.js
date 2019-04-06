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

describe('cart reducers', function () {
  describe('cartReducer', function () {
    it('should call createReducer with correct args', function () {
      expect(newReducer).toEqual({ reducer: 'fake-combined-reducer'})
      expect(createReducer.mock.calls[0][0]).toEqual({})
      expect(Object.keys(createReducer.mock.calls[0][1])).toEqual([
        'NEW_COMPLETED'
      ])
    })

    it('should support NEW_COMPLETED', function () {
      expect(
        createReducer.mock.calls[0][1]['NEW_COMPLETED']({}, {
          payload: fake.payload
        })
      ).toEqual('fake-payload')
    })
  })
})
